import {createStore, combineReducers}  from 'redux';
import expensesReducer from '../reducers/expenses.jsx';
import filtersReducer from '../reducers/filters.jsx';



export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })    
    );
    return store;
}