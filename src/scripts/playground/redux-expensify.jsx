import {createStore, combineReducers}  from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0} = {}) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
)


const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expense Reducer
const expenseReducerDefaultState = []
const expensesReducer = (state = expenseReducerDefaultState, action)=> {

    switch(action.type){
        case "ADD_EXPENSE":
        return [...state, action.expense];

        case "REMOVE_EXPENSE":
        return state.filter(exp => exp.id !== action.id);



        default:
        return state;
    }

}
// Filters Reducer 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // or date
    startDate: undefined,
    endDate: undefined
} 
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
        return state;
    }
}



const store = createStore(
    combineReducers({
        expense: expensesReducer,
        filters: filtersReducer
    })
    
);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
}) 

// console.log(store.getState());
const expenseOne = store.dispatch( addExpense({description: 'Rent', amount: 100}) );
const expenseTwo = store.dispatch( addExpense({description: 'Coffee', amount: 500, note: "paid in full"}) );
store.dispatch( addExpense({description: 'Income2', amount: 1200, note: "project in full"}) );

console.log(expenseOne);
store.dispatch( removeExpense(expenseTwo.expense.id) );











const demoState = {
    expenses : [
        {
            id: 'kjasdfgdashkghf',
            description: 'My particular description',
            note: 'This was the final payment for that address',
            amount: 54550,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }   
}

const user = {name:"Jen", age:24};
console.log(user);
console.log(
    {...user,
    location: "PA",
age:30}
);
