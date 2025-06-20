import React from 'react';
import { Link} from 'react-router-dom';

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans));
    }, [])

    const hostVanElement = hostVans.map(van => (
        <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    )) 

    return (
        <section>
            <h1 className='host-vans-title'>Your Listed Vans</h1>
                <div className="host-vans-list">
                {
                    hostVans.length > 0 ? (
                        <section>
                            {hostVanElement}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
                </div>
        </section>
    );
}