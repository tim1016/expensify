import React from 'react';
import { removeExpense } from '../actions/expenses.jsx';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div key={id}>
        <NavLink activeClassName="is-active" to={`/edit/${id}`}  exact={true}> <h3>{description} </h3> </NavLink>
        <p>Amount: {amount}</p>  
        <p>Date: {createdAt}</p>  
        <button onClick={()=> dispatch(removeExpense({id}))}>Remove</button> 
    </div>
);


export default connect ()(ExpenseListItem); 