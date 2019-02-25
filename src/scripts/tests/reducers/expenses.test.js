// import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import { expenses, filter } from '../fixtures/state';

const reducerAction = {
  type: undefined,
  expense: undefined,
  id: undefined
};

test('Test expenses reducer', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Remove expense reducer (success)', () => {
  reducerAction.type = 'REMOVE_EXPENSE';
  reducerAction.id = expenses[1].id;
  const action = expensesReducer(expenses, reducerAction);
  expect(action).toEqual([expenses[0], expenses[2]]);
});

test('Remove expense reducer (failure)', () => {
  reducerAction.type = 'REMOVE_EXPENSE';
  reducerAction.id = -1;
  const action = expensesReducer(expenses, reducerAction);
  expect(action).toEqual(expenses);
});

test('Add expense reducer', () => {
  reducerAction.type = 'ADD_EXPENSE';

  reducerAction.expense = {
    id: '101',
    description: expenses[2].description,
    note: expenses[2].note,
    amount: expenses[2].amount,
    createdAt: undefined
  };

  const subset = [expenses[0], expenses[1]];
  const action = expensesReducer(subset, reducerAction);
  expect(action).toEqual([...subset, reducerAction.expense]);
});


test('Edit expense reducer', () => {
  reducerAction.type = 'EDIT_EXPENSE';
  reducerAction.id = expenses[0].id;
  const str = ' (modified by test)';
  reducerAction.updates = {
    description: expenses[0].description + str
  };
  const action = expensesReducer(expenses, reducerAction);
  expect(action[0].description).toEqual(expenses[0].description + str);
});


test('Edit expense reducer (failure)', () => {
  reducerAction.type = 'EDIT_EXPENSE';
  reducerAction.id = `${expenses[0].id}asdfas`;
  const str = ' (modified by test)';
  reducerAction.updates = {
    description: expenses[0].description + str
  };
  const action = expensesReducer(expenses, reducerAction);
  expect(action[0].description).toEqual(expenses[0].description);
});


test('should test set expenses reducer', () => {
  reducerAction.type = 'SET_EXPENSES';
  reducerAction.expenses = [expenses[1]];
  const action = expensesReducer(expenses, reducerAction);
  expect(action).toEqual([expenses[1]]);
});
