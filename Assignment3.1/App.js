import React from "react";
import ReactDOM from "react-dom/client";



const Header=()=>{
    return(
        <header className="header">
        <div className="logo-container">
        <img className="logo" src="https://as2.ftcdn.net/v2/jpg/02/02/62/31/1000_F_202623148_qF2K0DyHX1hJ5aaATuyD9FAkbWCXfBYM.jpg" alt=""></img>
        </div>
        <div className="search-bar">
        <input type="text" placeholder="search.."></input>
        </div>
        <div className="user-icon">
        <img className="user" src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt=""></img>
        </div>
        </header>
    );
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);