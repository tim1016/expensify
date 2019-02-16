import React from 'react';

import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component{
    state ={
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error:''
    }
    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(
            () => ({description})
        );
        console.log(this.state.description);

    }
    onNoteChange = e => {
        const note = e.target.value;
        this.setState(
            ()=> ({note})
        )
    }

    onAmountChange = e => {
        const amount =e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?/))
        {
            this.setState( () => ({amount}) )
        }
    }

    onDateChange = (createdAt) =>{
        if(createdAt){
            this.setState( ()=> ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState( () => ({calendarFocused:focused})) 
    };

    onSubmit = e => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>( {error: "Please provide the description and the amount"}) );
        }else{
            this.setState(()=>( {error: ""}) );
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note:this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} action="">
                    <input 
                    type="text" 
                    placeholder="Description" 
                    id="" 
                    value={this.state.description}  
                    onChange={this.onDescriptionChange}
                    autoFocus/>
                    
                    <input 
                    type="text" 
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange} 
                    id=""/>
                    
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange} 
                    numberOfMonths={1}
                    isOutsideRange={ () => false }
                    />

                    <textarea 
                    placeholder="Add a note for your expense" 
                    id="" 
                    value={this.state.note}
                    onChange={this.onNoteChange}>
                    </textarea>

                    <button>Add Expense</button>
                </form>

            </div>

        );

    }
}