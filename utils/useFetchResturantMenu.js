import React, { useState, useEffect } from "react";
import { RESTAURANT_MENU_CDN } from "../Constant";

const useFetchRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setrestaurantMenu] = useState([]);

  useEffect(() => {
    getResturantInfo();
  }, []);
  const getResturantInfo = async () => {
    const data = await fetch(RESTAURANT_MENU_CDN + resId);
    const restaurant = await data.json();
    setRestaurant(restaurant?.data?.cards?.[0]?.card?.card?.info);
    setrestaurantMenu(
      restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards?.[2]?.card?.card?.itemCards
    );
  };
  return {restaurant:restaurant,restaurantMenu:restaurantMenu}
};
export default useFetchRestaurantMenu;
