import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters.jsx';


const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            name="" 
            defaultValue={props.filters.text} 
            id="" 
            onChange={
                (e)=>{props.dispatch(setTextFilter(e.target.value))}
            }
        />


        <select 
            name="" 
            id="" 
            value={props.filters.sortBy} 
            onChange={(e)=>
                {
                    if(e.target.value === 'date'){
                        props.dispatch(sortByDate());
                    }else if (e.target.value === 'amount'){
                        props.dispatch(sortByAmount());
                    }
                } 
            } 
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>

);



const mapStateToProps = (state) => ({filters: state.filters}); 

export default connect (mapStateToProps)(ExpenseListFilters); 