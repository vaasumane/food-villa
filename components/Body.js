import React, { useEffect, useState } from "react";
import { restaurantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getResturantData();
  }, []);

  async function getResturantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const RestaurantListData = await data.json();
    setAllRestaurants(
      RestaurantListData?.data?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      RestaurantListData?.data?.cards?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
  }

  function filterList(searchText, restaurantArr) {
    const filteredRestaurants = restaurantArr.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }

  return AllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container d-flex justify-center">
        <input
          type="text"
          className="search-text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          onClick={() => filterList(searchText, AllRestaurants)}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {FilteredRestaurants &&
          FilteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard  {...restaurant.info} />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Body;
