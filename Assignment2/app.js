import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createContext("h1",{id:"heading"},"this is assignment 2");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);