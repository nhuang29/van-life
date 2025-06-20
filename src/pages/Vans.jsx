import React from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { getVans } from '../api';

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const typeFilter = searchParams.get("type");

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setVans(data);
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false);
            }
        }
        loadVans()

    }, [])

    const vanFilter = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanElements = vanFilter.map(van => (
            <div key={van.id} className="van-title">
                <Link to={van.id} state={{
                    search: searchParams.toString(),
                    type: typeFilter
                    }}>
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
    ));

    if (loading) {
        return <h1 aria-live='polite'>Loading...</h1>
    }

    if (error) {
        return <h1 aria-live='assertive'>There was an error: {error.message}</h1>
    }

    return(
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list-filter-buttons">
                    <button className={`van-type simple ${typeFilter === 'simple' ? "selected" : null}`} onClick={() => setSearchParams({type: "simple"})}>simple</button>
                    <button className={`van-type rugged ${typeFilter === 'rugged' ? "selected" : null}`} onClick={() => setSearchParams({type: "rugged"})}>rugged</button>
                    <button className={`van-type luxury ${typeFilter === 'luxury' ? "selected" : null}`} onClick={() => setSearchParams({type: "luxury"})}>luxury</button>
                    {
                        typeFilter ? (
                            <button className="van-type clear-filters" onClick={() => setSearchParams({ })}>clear</button>
                        ) : (
                            null
                        )
                    }
                </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
            <Outlet />
        </>
        
    ); 
}