"use strict";

// JSX javascript XML
// var template = React.createElement("div", null, " ", React.createElement("h1", null, "This is JSX from app.js"), " ", React.createElement("p", null, "this is a paragraph"), " ");
var appRoot = document.getElementById("app");
// ReactDOM.render(template, appRoot);


var obj = {
    title: "this is JSX",
    subtitle: "this is subtitle"
};

var template2 = (
    <div>
        <h1>{obj.title}</h1>
        <p>{obj.subtitle}</p>
    </div>
);

ReactDOM.render(template2,appRoot);