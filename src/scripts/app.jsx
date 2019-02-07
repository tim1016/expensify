"use strict";

const appRoot = document.getElementById("app");
const obj = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of the computer",
    options: ["One", "Two"]
};





const templateOne = (
    <div>
        <h1>{obj.title}</h1>
        {obj.subtitle && <p>{obj.subtitle}</p>} 
        <p>{obj.options.length >= 2? "Your Options":"No options"}</p>
        <ol>
            <li>{obj.options[0]}</li>
            <li>{obj.options[1]}</li>
        </ol>
    </div>
);

