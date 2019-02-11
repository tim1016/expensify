"use strict";

const appRoot = document.getElementById("app");
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of the computer",
    options: ["One", "Two"]
};

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    // console.log(e.target.elements);
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    console.log("form Submitted");
}

// const getOptions = () =>{
//     if(app.options.length === 0) return;
//     let litags = app.options.map(option => `<li key=${option}> ${option} </li>`);
//     const str = litags.join(', ');
//     console.log(str);
//     return `[${str}]`;
// }


const onRemoveAll = () =>{
    app.options=[];
    render();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    // console.log(randomNum);
    const option = app.options[randomNum];
    console.log(option);
    
}


const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>} 
            <p>{app.options.length >= 0? "Your Options":"No options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}> Choose </button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map(option =>  <li key={option}>{option}</li>)
            }
            </ol>
            <form action="" onSubmit={onFormSubmit}> 
                <input type="text" name="option" id=""/>
                <button>Add Option</button>
            </form>

        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
