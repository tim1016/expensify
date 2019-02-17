import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.jsx';
import {editExpense,removeExpense} from '../actions/expenses.jsx';



const EditExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm expense={props.expense}  onSubmit={ (expense) => {
            props.dispatch(editExpense(props.match.params.id, expense));
            props.history.push("/"); 
        }}
        />
        <button onClick={ () => {
            props.dispatch(removeExpense({id: props.expense.id}))
            props.history.push("/");
        }

        }> Remove Expense</button>
    </div> 
);


const mapStateToProps = (state, props) => {
    return {        
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
} 
export default connect(mapStateToProps)(EditExpense);