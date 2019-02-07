let count = 0;
const addOne =() =>{
    count++;
    console.log('addOne');
    renderCounterApp();
}
const minusOne =() =>{
    count--;
    console.log('minusOne');
    renderCounterApp();
}
const resetCount =() =>{
    count = 0;
    console.log('reset');
    renderCounterApp();
}





// console.log(templateAddOne);

// ReactDOM.render(templateTwo,appRoot);


const renderCounterApp = () =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}


renderCounterApp(); 