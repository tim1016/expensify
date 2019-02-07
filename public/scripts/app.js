"use strict"; // JSX javascript XML
// var template = React.createElement("div", null, " ", React.createElement("h1", null, "This is JSX from app.js"), " ", React.createElement("p", null, "this is a paragraph"), " ");

var appRoot = document.getElementById("app"); // ReactDOM.render(template, appRoot);

var obj = {
  title: "this is JSX",
  subtitle: "this is subtitle",
  options: ["one", "Two"]
};

function getSubtitle(obj) {
  if (obj.subtitle) {
    return "<p> {obj.subtitle} </p>";
  }
}

;
var template2 = React.createElement("div", null, React.createElement("h1", null, obj.title)); // ReactDOM.render(template2,appRoot);
