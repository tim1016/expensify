import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import { expenses } from '../fixtures/state';

let editExpense; let startRemoveExpense; let history;
let wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpense
    editExpense={editExpense}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[2]}
  />);
});


test('Snapshot Edit Expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Handle Edit Expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Handle Remove Expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
});
