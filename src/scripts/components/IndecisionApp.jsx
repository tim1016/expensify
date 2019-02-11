import React from 'react';

import AddOption from './AddOption.jsx';
import Options from './Options.jsx';
import Header from './Header.jsx';
import Action from './Action.jsx'; 


export default  class IndecisionApp extends React.Component{

    state = {
        options : []
    }

    handleDeleteOptions = () => {
        this.setState( ()=> ({options: []}) );
    }

    deleteOption = option => {
        this.setState( prevState => ({
            options : prevState.options.filter(el => el !== option)})
        );
    }


    handleAddOption = option =>{
        option = option.trim();
        if(!option){
            return "Enter a valid value to the option";
        }
        else if( this.state.options.indexOf(option) > -1){
            return "Entered option already exists"
        }
        else{
            this.setState( (prevState)=>  ({options : prevState.options.concat(option)}) ); 
        }
    }

    handlePick = () =>{
        const numOptions = this.state.options.length;
        if(numOptions > 0){
            const randomNum = Math.floor(Math.random() * numOptions);
            console.log(this.state.options[randomNum]);
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options && options.length !== 0) this.setState( ( ) => ({options}))
            else{ this.setState( ()=> ({options: []})
            )};

        }catch(e){

        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options) ;
           localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('component unmounted'); 
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
                deleteOption= {this.deleteOption}
                />
                <AddOption add={this.handleAddOption}/>
            </div>
        );
    }
}
