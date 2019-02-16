import React from 'react';
import  {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';

import {addExpense} from '../actions/expenses.jsx'


const AddExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={ (expense)=> {
            props.dispatch(addExpense(expense));
            props.history.push("/"); 

            } }/>
    </div> 
);

export default connect()(AddExpense)