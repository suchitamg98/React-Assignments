import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo}=resData?.info;
    const{deliveryTime}=resData?.info?.sla;

    
    return(
        
          <div className="res-card">
          <div className="image">
              <img className="res-img" src={CDN_URL+cloudinaryImageId}></img>
          </div>
          <div>
              <h2>{name}</h2>
              <h4>{cuisines}</h4>
              <h4>{avgRating}</h4>
              <h4>{costForTwo}</h4>
              <h4>{deliveryTime}</h4>
          </div>
          
      </div>
    )
}
export default RestaurantCard;