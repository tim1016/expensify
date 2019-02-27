import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginPage from '../../components/LoginPage'; 

test('Shallow render Login page', () => {
  const wrapper = shallow(<LoginPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
