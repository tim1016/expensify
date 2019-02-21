import moment from 'moment';

const state = {
  expenses: [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }],
  filters: {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};

export const expenses = state.expenses;
export const filter = state.filters;
export const altFilters = {
  text: 'bills',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};
