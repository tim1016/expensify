import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import "../styles/styles.scss";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from './store/configureStore.jsx';
import {addExpense, removeExpense, editExpense} from './actions/expenses.jsx';
import {sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate} from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx';
import moment from 'moment';

// The following creates the store and adds a few expenses and filters
const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx =(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));