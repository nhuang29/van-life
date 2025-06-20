import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getVan } from '../api';

export default function VanDetail() {

    const params = useParams();
    const location = useLocation();
    const [van, setVan] = React.useState(null);

    React.useEffect(() => {
        async function loadVans() {
            try {
                const data = await getVan(params.id)
                setVan(data);
            } catch (err) {
                console.log(err);
            }
        }
        loadVans()
    }, [params])

    return (
        <div className='van-detail-container'>
            <Link
                to={
                    location.state?.search ? `..?${location.state.search}` : ".."
                }
                relative="path"
                className="back-button"
            >&larr; <span>Back to {location.state?.type ? location.state.type : "all"} vans</span></Link>
            {
                van ? 
                <div className='van-detail'>
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
                : 
                <h2>Loading...</h2>
            }
        </div>
    );
}