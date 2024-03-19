import React from 'react';
import { IMAGE_CDN } from '../Constant';



const RestaurantCard = ({ id, name, cloudinaryImageId, areaName, costForTwo, avgRating }) => {
    return (
        <>
            <div key={id} className='card'>
                <div className='div-img'>
                    <img src={IMAGE_CDN + cloudinaryImageId} />
                </div>
                <div className='card-body'>
                <h2>{name}</h2>
                    <span> {areaName}</span>
                    <h4>{costForTwo}</h4>
                    <h4 className='ratings'>{avgRating} stars</h4>
                </div>

            </div>

        </>
    )
}

export default RestaurantCard
