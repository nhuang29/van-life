import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
    const vanInfo = useOutletContext();

    return (
        <img src={vanInfo.imageUrl} className="host-van-detail-image" />
    );
}