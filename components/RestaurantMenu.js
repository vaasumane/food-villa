import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_CDN, Image_ASSET_CDN } from "../Constant";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchResturantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, restaurantMenu } = useFetchRestaurantMenu(id);
  return restaurant === null ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="text-center">{restaurant.name}`s Restaurant</h1>
      <div className="restautrant-details">
        <div className="RestroCard">
          <img
            src={IMAGE_CDN + restaurant?.cloudinaryImageId}
            className="details-resto-image align-center"
          />
          <div>
            <h1>{restaurant.name}</h1>
            <span> {restaurant.cuisines.toString()}</span>
            <h4>{restaurant.costForTwoMessage}</h4>
            <h4>{restaurant.avgRating} ⭐</h4>
          </div>
        </div>
        <div className="RestroCard">
        <div >
        {restaurant?.aggregatedDiscountInfo?.descriptionList?.length > 0 &&
          restaurant?.aggregatedDiscountInfo?.descriptionList?.map((menu,index) => (
            <ul key={index} >
              <li>
                <h5>{menu?.meta}</h5>
              </li>
            </ul>
          ))}
      </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Restaurant Menu</h1>
      <div className="menu-list">
        {restaurantMenu && restaurantMenu.length > 0 &&
          restaurantMenu.map((menu) => (
            <div key={menu?.card?.info?.id} className="d-flex menu-item">
              <img src={Image_ASSET_CDN + menu?.card?.info?.imageId} />
              <div>
                <h5>{menu?.card?.info?.name}</h5>
                <h5>Rs. {menu?.card?.info?.price / 100}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
