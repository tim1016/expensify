import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

// eslint-disable-next-line import/prefer-default-export
export const ExpensesSummary = ({ expenseCount = 0, expenseTotal = -999 }) => {
  const expenseWord = (expenseCount > 1 ? 'expenses' : 'expense');
  const formattedTotal = numeral(expenseTotal).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing
          {' '}
          <span>
          {expenseCount}
          </span>
          {' '}
          {expenseWord}
          {' '}
          totalling
          {' '}
          <span>
          {formattedTotal}
          </span>
        </h1>
        <div className="page-header__actions"><Link className="btn btn-primary" to="/create">Add Expense</Link></div>
      </div>
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
