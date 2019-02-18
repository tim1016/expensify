import React from 'react'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('ExpenseDashboardPage shallow render', ()=>{
    const wrapper = shallow (<ExpenseDashboardPage/>);

    // You can do similar DOM selection as in regular javascript like below
    // .find is like .querySelector
    // expect(wrapper.find('#myElementId').text()).toBe('Expensify');


    expect(toJSON(wrapper)).toMatchSnapshot();

});



