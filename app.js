import React from "react"
import ReactDOM from "react-dom/client"

const header = React.createElement("div", {"id":"parent1"}, [React.createElement("div", {"id":"child"},

    [React.createElement("h1", {"id":"h1header"}, "I am an h1 tag Namaste"  ),
        React.createElement("h2", {}, "I am an h2 tag" )  
    ]
 ), React.createElement("div", {"id":"child2"},

    [React.createElement("h1", {"id":"h1header2"}, "I am an h1 tag" ),
        React.createElement("h2", {}, "I am an h2 tag" )  
    ]
 )])


const root = ReactDOM.createRoot(document.getElementById("parent"))
root.render(header)


