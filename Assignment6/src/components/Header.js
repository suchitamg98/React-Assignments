import React from "react";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{

    const [btnName,setBtnName]=useState('Login');
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
                

            </div>
            <ol className="nav-list">
                <li className="nav-items">Home</li>
                <li className="nav-items">About Us</li>
                <li className="nav-items">Contact Us</li>
                <li className="nav-items">Cart</li>
                <button className="login-btn" onClick={()=>{
                if(btnName==='Login')
                    {
                        setBtnName("Logout")
                    }
                    else{
                        setBtnName("Login")
                    }
                
                }
                }> {btnName}</button>
            </ol>
        </div>
    )
}
export default Header;