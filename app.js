/**
 *   <div id ="parent">
 *     <div id="child">
 *     <h1> I am h1 tag</h1>
 * </div
 * <div id="child2">
 *     <h1> I am h1 tag</h1>
 * </div>
 * </div>
 * 
 * 
 * 
 */




const header = React.createElement("div", {"id":"parent1"}, [React.createElement("div", {"id":"child"},

    [React.createElement("h1", {"id":"h1header"}, "I am an h1 tag" ),
        React.createElement("h2", {}, "I am an h2 tag" )  
    ]
 ), React.createElement("div", {"id":"child2"},

    [React.createElement("h1", {"id":"h1header2"}, "I am an h1 tag" ),
        React.createElement("h2", {}, "I am an h2 tag" )  
    ]
 )])



console.log("header is " + JSON.stringify(header))
const root = ReactDOM.createRoot(document.getElementById("parent"))
root.render(header)


