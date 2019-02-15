import React from 'react';
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilters from './ExpenseListFilters.jsx';
import {connect} from 'react-redux';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;