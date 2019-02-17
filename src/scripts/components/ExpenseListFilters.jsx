import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters.jsx';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(
            () => (
                {calendarFocused}
            )
        );

    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    name="" 
                    defaultValue={this.props.filters.text} 
                    id="" 
                    onChange={
                        (e)=>{this.props.dispatch(setTextFilter(e.target.value))}
                    }
                />
        
        
                <select 
                    name="" 
                    id="" 
                    value={this.props.filters.sortBy} 
                    onChange={(e)=>
                        {
                            if(e.target.value === 'date'){
                                this.props.dispatch(sortByDate());
                            }else if (e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount());
                            }
                        } 
                    } 
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate = {this.props.filters.startDate}
                startDateId="your_unique_start_date_id"
                endDate = {this.props.filters.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange ={this.onDatesChange} 
                focusedInput = {this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                isOutsideRange={ () => false }
                numberOfMonths={1}
                showClearDates={true} 
                />

            </div>
        
        );
    }
}





const mapStateToProps = (state) => ({filters: state.filters}); 

export default connect (mapStateToProps)(ExpenseListFilters); 