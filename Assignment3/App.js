import React from "react";
import ReactDOM from "react-dom/client"


// Created a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const heading=React.createElement("div",{class:"title"},[React.createElement("h1",{id:"heading1"},"this is h1 element"),
React.createElement("h2",{id:"heading2"},"this is h2 element"),
React.createElement("h3",{id:"heading3"},"this is h3 element")]);

// Created a Nested header Element using JSX(h1,h2,h3 inside a div with class “title”)
const headdingJsx=(<div className="title">
    <h1>this is h1 element</h1>
    <h2>this is h2 element</h2>
    <h3>this is h3 element</h3>
</div>);

const HeadingFunctionalComponent=()=>{
    return(
        <div className="title">
            <h1>this is h1 element</h1>
            <h2>this is h2 element</h2>
            <h3>this is h3 element</h3>
        </div>
    )
}
const jsxHeading=<h1>Namste React using JSX</h1>
const Title=()=>{
    return(<h1>this is title component</h1>)
}
function HeadingComponentNormalFun(){
    return(
        <h1>This is normal function for creating component </h1>
    )
}
const data=100;
const a=20;
const b=30;
const HeadingComponent=()=>{
    return(
        //example for nexted jsx
        <div id="container">
             
            
                {a+b} {/* It works same like Javascript */}
                {jsxHeading}{/* displaying react element */}
                <h1 className="head">This is heading component using arrow function</h1>
                <Title/> {/* displaying component inside the component(component composition) */}
                { HeadingComponentNormalFun()}  {/* calling the component  using normal function calling method */}
                <HeadingComponentNormalFun/> {/* calling the functional component created by normal function */}
                {data} {/* It works same like Javascript */}
              
               
        </div>
     
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);
// root.render(heading);//using createelement
// root.render(headdingJsx);//using jsx
root.render(<HeadingFunctionalComponent/>);