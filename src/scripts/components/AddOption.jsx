import React from 'react';

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

        const error = this.props.add(option);
        
        this.setState(()=> ({error}));

        if(!error){
            e.target.elements.option.value = "";
        }
    
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

export default AddOption;