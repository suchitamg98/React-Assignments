import React from "react";
import ReactDOM from "react-dom/client"


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-workbench.99static.com/uNN5i13HsdTZqMFxxZ96TF1vPXY=/99designs-contests-attachments/118/118612/attachment_118612943"></img>
            </div>
            <div className="nav-bar">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
                
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);