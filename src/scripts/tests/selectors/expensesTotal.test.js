import { expenses } from '../fixtures/state';
import selectExpensesTotal from '../../selectors/expensesTotal';

test('Test total expenses with empty array', () => {
  const action = selectExpensesTotal([]);
  expect(action).toBe(0);
});

test('Test total expenses with single item', () => {
  const action = selectExpensesTotal([expenses[0]]);
  expect(action).toBe(expenses[0].amount);
});

test('Test total expenses with empty array', () => {
  const action = selectExpensesTotal(expenses);
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  expect(action).toBe(total);
});
