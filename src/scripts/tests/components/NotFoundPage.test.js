import React from 'react'
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('NotFoundPage shallow render', ()=>{
    const wrapper = shallow (<NotFoundPage/>);

    // You can do similar DOM selection as in regular javascript like below
    // .find is like .querySelector
    // expect(wrapper.find('#myElementId').text()).toBe('Expensify');


    expect(toJSON(wrapper)).toMatchSnapshot();

});



