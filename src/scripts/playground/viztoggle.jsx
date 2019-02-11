// let state = 0;

// const toggleState = () => {
//     state = (state === 0) ?  1 : 0;
//     template =(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleState}> 
//             {(state===0)? "Show": "Hide" } 
//             </button>
//             <p> {(state===0)? "Content Hidden": "Content Shown"} </p>
//         </div>
//     );
//     ReactDOM.render(template, app);
// }
// appRoot = document.getElementById("app");
// toggleState();



class VizToggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {show : true};
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(){
        this.setState( (prevState) => {return {show: !prevState.show}});
    }


    render(){

        template =(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleState}> 
                {(this.state.show===false)? "Show": "Hide" } 
                </button>
                <p> {(this.state.show===false)? "": "Content Shown"} </p>
            </div>
        );

        return template;

    }
}

ReactDOM.render(<VizToggle/>, document.getElementById("app"));