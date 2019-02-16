import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "../styles/styles.scss";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from './store/configureStore.jsx';
import {addExpense, removeExpense, editExpense} from './actions/expenses.jsx';
import {sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate} from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx';

// The following creates the store and adds a few expenses and filters
const store = configureStore();
const expenseOne = store.dispatch( addExpense({description: 'rent bill' , amount: 100, createdAt: 10 }) );
const expenseTwo = store.dispatch( addExpense({description: 'beans bill', amount: 150, note: "paid in full", createdAt: 300}) );
const expenseThree = store.dispatch( addExpense({description: 'fee bill', amount: 250, note: "paid in full", createdAt: 100}) );
store.dispatch(setTextFilter(''));
// store.dispatch(sortByAmount());
store.dispatch(setStartDate(-1250));
store.dispatch(sortByDate()); 

// We get the current state
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);


const jsx =(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));