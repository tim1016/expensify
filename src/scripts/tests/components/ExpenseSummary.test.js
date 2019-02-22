import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('Render ExpenseSummary shallow with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={500} />);
  expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseSummary shallow with many expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={5345400.3432} />);
  expect(wrapper).toMatchSnapshot();
});
