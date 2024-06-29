import React from "react";
import ReactDOM from "react-dom/client"
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
root.render(<HeadingComponent/>);