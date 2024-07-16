import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const heading=<h1>this is react element</h1>

const AppLayout=()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);