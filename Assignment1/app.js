
// creating this structure using react 
{/* <div id="parent">
    <div id="child">
        <h1>heading 1</h1>
        <h2>headding 2</h2>
    </div>
    <div id="child">
        <h1>heading 1</h1>
        <h2>headding 2</h2>
    </div>
</div> */}

const parent =React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
    [React.createElement("h1",{id:"heading_1"},"Heading 1"),React.createElement("h2",{id:"heading_2"},"Heading 2")])],
    [React.createElement("div",{id:"child2"},
    [React.createElement("h1",{id:"heading_1"},"Heading 1"),React.createElement("h2",{id:"heading_2"},"Heading 2")])])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);