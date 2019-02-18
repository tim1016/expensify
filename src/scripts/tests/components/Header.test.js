import React from 'react'
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('Header shallow render', ()=>{
    const wrapper = shallow (<Header/>);

    // You can do similar DOM selection as in regular javascript like below
    // .find is like .querySelector
    // expect(wrapper.find('#myElementId').text()).toBe('Expensify');


    expect(toJSON(wrapper)).toMatchSnapshot();

});



