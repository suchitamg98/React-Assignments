import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{

    const[listOfRestaurants,setlistOfRestaurants]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("")

useEffect(()=>{
  fetchData();
},[]);

const fetchData=async()=>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0392092&lng=77.608586&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);
  setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

return listOfRestaurants.length===0 ? (
<Shimmer/>
): (
        <div className="body">
         
       <div className="filter">
        
       <div className="search">
        <input className="search-box" type="text" value={searchText}
          placeholder="search" onChange={(e)=>{
              setSearchText(e.target.value);
          }} />
        <button type="submit" className="search-btn" onClick={()=>{
       const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
       setFilteredRestaurant(filteredRestaurant);

         // console.log(searchText);
        }} >submit</button>
       </div>
        <button className="filter-btn" onClick={()=>{
       const filteredList =listOfRestaurants.filter((res)=>
            res.info.avgRating > 4
          ) 
          setlistOfRestaurants(filteredList);
        }} >Top Rated Restaurant</button>
       </div>
    <div className="res-container">
    {filteredRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
    </div>
    </div>
       
       
      )
}
export default Body;