import React from "react";
import { IMAGE_CDN } from "../Constant";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  areaName,
  costForTwo,
  avgRating,
}) => {
  return (
    <>
      <div
        key={id}
        className="hover:shadow-lg transition-all p-3 relative rounded-xl bg-green-50 hover:bg-green-100 h-full"
      >
        <div className="">
          <img
            src={IMAGE_CDN + cloudinaryImageId}
            className="h-52 w-60 object-cover rounded-lg hover:scale-95"
          />
        </div>
        <div className="py-2  w-60">
            <h2 className=" text-2xl font-semibold">{name}</h2>
            <span> {areaName}</span>
            <h4>{costForTwo}</h4>
        
            <span className="text-sm absolute top-2 left-2 p-1 bg-green-700 text-white  rounded-lg">
              {avgRating} stars
            </span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
