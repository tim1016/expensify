import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { addExpense } from './actions/expenses';
import './firebase/firebase';
// import '../playground/promises';

import '../styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// The following creates the store and adds a few expenses and filters
const store = configureStore();
// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log('visibleExpenses');


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
