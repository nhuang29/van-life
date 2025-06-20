import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
    const vanInfo = useOutletContext();

    return (
        <h3 className="host-van-price">${vanInfo.price}<span>/day</span></h3>
    );
}