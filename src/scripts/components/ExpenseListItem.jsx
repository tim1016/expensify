import React from 'react';
import { removeExpense } from '../actions/expenses.jsx';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div key={id}>
        <h3 > Description: {description} </h3>
        <p>Amount: {amount}</p>  
        <p>Date: {createdAt}</p>  
        <button onClick={()=> dispatch(removeExpense({id}))}>Remove</button> 
    </div>
);


export default connect ()(ExpenseListItem); 