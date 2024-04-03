import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_CDN, Image_ASSET_CDN } from "../Constant";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchResturantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { FaPlus } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, restaurantMenu } = useFetchRestaurantMenu(id);
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addItem(item));
  };
  return restaurant === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="section lg:mx-36">
        <div className="container mx-auto py-10">
          <h1 className="text-center font-semibold text-4xl pb-5">
            {restaurant?.name} Restaurant
          </h1>

          <div className="lg:flex flex-cols gap-10 justify-center  pt-5  ">
            {/* <div className="relative">
              <div className="bg-gray-100 rounded-lg p-4 flex-1 sticky top-14">
                <div className="">
                  <div className="text-center p-5 flex justify-center">
                    <img
                      src={IMAGE_CDN + restaurant?.cloudinaryImageId}
                      className="rounded-xl shadow-xl h-96 w-96"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <h2 className="font-semibold text-2xl text-center pb-2">
                        {restaurant?.name}
                      </h2>
                      <span className="text-center">
                        {" "}
                        {restaurant?.cuisines?.toString()}
                      </span>
                      <h4>{restaurant?.costForTwoMessage}</h4>
                      <h4>{restaurant?.avgRating} ⭐</h4>
                    </div>
                    <div className=" pt-8">
                      <div>
                        {restaurant?.aggregatedDiscountInfo?.descriptionList
                          ?.length > 0 &&
                          restaurant?.aggregatedDiscountInfo?.descriptionList?.map(
                            (menu, index) => (
                              <ul key={index}>
                                <li>
                                  <h5>{menu?.meta}</h5>
                                </li>
                              </ul>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" text-center py-5 ml-5">
                  Address: {restaurant?.labels?.[1]?.message}
                </p>
              </div>
            </div> */}
            <div className="flex-1 ">
              <h2 className="text-center font-semibold text-xl pb-2">
                Restaurant Menu
              </h2>
              <div className=" justify-center items-center mx-auto">
                {restaurantMenu && restaurantMenu.length > 0 ? (
                  restaurantMenu.map((menu) => (
                    <div
                      key={menu?.card?.info?.id}
                      className="flex bg-green-50 rounded-xl gap-x-5 mb-5 p-3  items-center mx-auto shadow-lg"
                    >
                      <div className="w-60 h-44">
                        <img
                          src={Image_ASSET_CDN + menu?.card?.info?.imageId}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {menu?.card?.info?.name} - Rs.{" "}
                          {menu?.card?.info?.price
                            ? menu?.card?.info?.price / 100
                            : menu?.card?.info?.defaultPrice / 100}
                        </h4>
                        {/* <h5 className="font-semibold">
                          Rs. {menu?.card?.info?.price ? menu?.card?.info?.price / 100:menu?.card?.info?.defaultPrice/100}
                        </h5> */}
                        <p>{menu?.card?.info?.description}</p>
                        <button
                          className="p-2 m-2 bg-black text-white rounded-lg flex items-center"
                          onClick={() => handleCart(menu?.card?.info)}
                        >
                          Add <BiPlus />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">No menu available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
