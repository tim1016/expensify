import React from 'react'
import moment from 'moment';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import {expenses} from '../fixtures/state';

test('Render ExpenseForm Correctly with no data', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});


test('Render ExpenseForm Correctly with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm error with invalid submission', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', 
    {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Check description imput change event in the form', ()=>{
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('Check Note in the textarea', ()=>{
    const value = "This is new Note";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
});

test('Check amount field (valid Input) in the Expenseform', ()=>{
    const value = "234.1";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
});

// test('Check amount field (invalid Input) in the Expenseform', ()=>{
//     const value = "12.122";
//     const wrapper = shallow(<ExpenseForm/>);
//     wrapper.find('input').at(1).simulate('change', {
//         target:{value}
//     })
//     expect(wrapper.state('amount')).toBe('');
// });

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
  });