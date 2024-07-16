import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{

    const[listOfRestaurants,setlistOfRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");
   
    
    useEffect(()=>{
       
        fetchData();
         
    },[])

    const fetchData=async ()=>{
        const data=  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0392092&lng=77.608586&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }
    return(
        <div className="body">
        <div className="search-bar">
            <input type="search" placeholder="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}
             />
            
            <button type="submit" className="search-btn" onClick={()=>{
       const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
       setFilteredRestaurant(filteredRestaurants);

         // console.log(searchText);
        }} >submit</button>
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                setFilteredRestaurant(filteredRestaurants);
                console.log(filteredRestaurants);
            }} >Top rated Restaurants</button>
            
        </div>
        <div className="Restaurant-container">
           
            {filteredRestaurants.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
        </div>
        </div>
    )
}
export default Body;