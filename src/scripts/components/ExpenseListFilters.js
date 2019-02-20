import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(
            () => (
                {calendarFocused}
            )
        );
    }


    onTextChange = (e)=>{this.props.setTextFilter(e.target.value)};
    onSortChange = (e)=>
    {
        if(e.target.value === 'date'){
            this.props.sortByDate();
        }else if (e.target.value === 'amount'){
            this.props.sortByAmount();
        }
    } 


    render(){
        return (
            <div>
                <input 
                    type="text" 
                    name="" 
                    defaultValue={this.props.filters.text} 
                    id="" 
                    onChange={this.onTextChange}
                />
        
        
                <select 
                    name="" 
                    id="" 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange} 
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

const mapDisPatchToProps = (dispatch) => ({
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
export default connect (mapStateToProps, mapDisPatchToProps)(ExpenseListFilters); 