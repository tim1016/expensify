"use strict";

var appRoot = document.getElementById("app");
var obj = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of the computer",
  options: ["One", "Two"]
};
var template2 = React.createElement("div", null, React.createElement("h1", null, obj.title), obj.subtitle && React.createElement("p", null, obj.subtitle), React.createElement("p", null, obj.options.length >= 2 ? "Your Options" : "No options"), React.createElement("ol", null, React.createElement("li", null, obj.options[0]), React.createElement("li", null, obj.options[1])));
ReactDOM.render(template2, appRoot);
