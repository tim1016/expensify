import React from 'react';
import {connect} from 'react-redux';


const EditExpense = (props) => {
    console.log(props);
    const jsx=(
        <div>Edit {props.match.params.id}</div>
    );
    return jsx;
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( expense => expense.id === props.match.params.id)
    }
}
export default connect()(EditExpense);