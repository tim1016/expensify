import React from 'react';
import {EditExpense} from '../../components/EditExpense'
import { shallow } from 'enzyme';
import {expenses} from '../fixtures/state';

let editExpense, removeExpense, history, wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history} 
        expense={expenses[2]}
    />);
}   

);


test('Snapshot Edit Expense', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Handle Edit Expense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
});

test('Handle Remove Expense', ()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id})
});