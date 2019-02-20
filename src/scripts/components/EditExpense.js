import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../actions/expenses';



export class EditExpense extends React.Component{

    constructor(props){
        super(props);
    }

    onSubmit = (id, expense) => {
        this.props.editExpense(this.props.expense.id, this.props.expense);
        this.props.history.push("/"); 
    }

    onRemove = (id) => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push("/");
    }

    render(){
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                expense={this.props.expense}  
                onSubmit={this.onSubmit}
                />

                <button 
                onClick={this.onRemove}>
                Remove Expense
                </button>

            </div> 
        );
    }
}




const mapStateToProps = (state, props) => (
    {expense: state.expenses.find((expense) => expense.id === props.match.params.id)}
    );
       
        


const mapDispatchToProps = (dispatch,props) => ({
    editExpense: (id,expense)=> dispatch(editExpense(id,expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);