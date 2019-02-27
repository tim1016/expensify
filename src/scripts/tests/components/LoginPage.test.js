import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';

test('Shallow render Login page', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<LoginPage onClick={onClickSpy} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Header Logout button spy', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={onClickSpy} />);
  wrapper.find('button').simulate('click');
  expect(onClickSpy).toHaveBeenCalled();
});
