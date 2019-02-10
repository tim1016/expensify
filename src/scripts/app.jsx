class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options : props.options// ["Thing one", "Thing two", "Thing three", "Thing four"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options : []
            }
        });
    } 


    handleAddOption(option){
        option = option.trim();
        if(!option){
            // console.log("App", this.state);
            return "Enter a valid value to the option"
        }
        else if( this.state.options.indexOf(option) > -1){
            return "Entered option already exists"
        }else{
            this.setState( (prevState)=>{
                return { options : prevState.options.concat(option) }
            });
        }
    }

    handlePick(){
        const numOptions = this.state.options.length;
        if(numOptions > 0){
            const randomNum = Math.floor(Math.random() * numOptions);
            console.log(this.state.options[randomNum]);
        }
    }

    render(){
        
        const subtitle = "Put your life in the hands of the  computer";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
                <Options 
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption add={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title : 'Indecision App v1'
}


const Action = (props) => {
    return(
        <button disabled={!props.hasOptions} onClick={props.pick}>What should I do</button>
    );
}



const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button> 

            {props.options.map( optionName => <Option key={optionName} optionText={optionName}/>)}
        </div>
    );
}
const Option = (props) => {
    return(
        <div>
            <p key={props.optionText}>{props.optionText}</p>
        </div>
    );
}


class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.processOption = this.processOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    processOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = "";
        const error = this.props.add(option);
        
        this.setState(()=>{
            return {
                error : error
            }
        });
    
        console.log("Add option", this.state);
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.processOption}>
                    {this.state.error && <p>{this.state.error}</p>} 
                    <input type="text" name="option" id=""/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}





ReactDOM.render(<IndecisionApp options={["thing One", "Thing two"]} />, document.getElementById("app"))