import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('Header shallow render', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onClickSpy}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Header Logout button spy', () => {
  const onClickSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={onClickSpy} />);
  wrapper.find('button').simulate('click');
  expect(onClickSpy).toHaveBeenCalled();
});
