import React from 'react';
import {NavLink} from 'react-router-dom';
import moment from 'moment'

const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div key={id}>
        <NavLink activeClassName="is-active" to={`/edit/${id}`}  exact={true}> <h3>{description} </h3> </NavLink>
        <p>Amount: {amount}</p>  
        <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem; 