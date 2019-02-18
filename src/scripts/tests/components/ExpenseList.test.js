import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import {expenses} from '../fixtures/state';

test('Render ExpenseList', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('Render ExpenseList (empty)', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})