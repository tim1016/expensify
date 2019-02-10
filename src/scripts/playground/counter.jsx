// appRoot = ;
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handlePlus1 = this.handlePlus1.bind(this);
        this.handleMinus1 = this.handleMinus1.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
        console.log(this)

    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlus1}>+1</button>
                <button onClick={this.handleMinus1}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    handlePlus1(e){
        this.setState(prevState=>{return {count: prevState.count + 1}});

    }

    handleMinus1(e){
        this.setState(prevState=>{return {count: prevState.count-1}});
    }

    handleReset(e){
        this.setState(()=>{return {count:0}});
    }
}

Counter.defaultProps = {
    count:100
}

ReactDOM.render(<Counter count={100}/>, document.getElementById("app"));

// let count = 0;
// const addOne =() =>{
//     count++;
//     console.log('addOne');
//     renderCounterApp();
// }
// const minusOne =() =>{
//     count--;
//     console.log('minusOne');
//     renderCounterApp();
// }
// const resetCount =() =>{
//     count = 0;
//     console.log('reset');
//     renderCounterApp();
// }

// appRoot = document.getElementById("app");


// const renderCounterApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} >+1</button>
//             <button onClick={minusOne}> -1 </button>
//             <button onClick={resetCount}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp(); 

