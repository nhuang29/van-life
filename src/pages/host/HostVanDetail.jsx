import React from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';

export default function HostVanDetail() {

    const [hostVanDetail, setHostVanDetail] = React.useState([]);
    const params = useParams();

    const styles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setHostVanDetail(data.vans))
    }, [])

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                <img src={hostVanDetail.imageUrl} />
                <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${hostVanDetail.type}`}>
                            {hostVanDetail.type}
                        </i>
                        <h3>{hostVanDetail.name}</h3>
                        <h4>${hostVanDetail.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({isActive}) => isActive ? styles : null}
                >Details</NavLink>
                <NavLink 
                    to="pricing"
                    end
                    style={({isActive}) => isActive ? styles : null}
                >Pricing</NavLink>
                <NavLink 
                    to="photos"
                    end
                    style={({isActive}) => isActive ? styles : null}
                >Photos</NavLink>
                </nav>
                <Outlet context={hostVanDetail}/>
            </div>
        </section>
    );
}