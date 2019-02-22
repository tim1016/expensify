import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

// eslint-disable-next-line import/prefer-default-export
export const ExpensesSummary = ({ expenseCount = 0, expenseTotal = -999 }) => {
  const expenseWord = (expenseCount > 1 ? 'expenses' : 'expense');
  const formattedTotal = numeral(expenseTotal).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing
        {' '}
        {expenseCount}
        {' '}
        {expenseWord}
        {' '}
        totalling
        {' '}
        {formattedTotal}
      </h1>
    </div>
  );
};


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
