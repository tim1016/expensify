import React from 'react';
const EditExpense = (props) => {
    console.log(props);
    const jsx=(
        <div>Edit {props.match.params.id}</div>
    );
    return jsx;
}

export default EditExpense;