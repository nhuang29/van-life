import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
    const vanInfo = useOutletContext();

    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{vanInfo.name}</span></h4>
            <h4>Category: <span>{vanInfo.type}</span></h4>
            <h4>Description: <span>{vanInfo.description}</span></h4>
            <h4>Visibility: <span>public</span></h4>
        </section>
    );
}