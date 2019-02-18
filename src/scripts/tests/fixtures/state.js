import moment from 'moment';
const state = {
	expenses: [
		{
			id: '221e5b57-0db6-4b52-8300-fd5950e401b6',
			description: 'Water bill',
			note: '',
			amount: 4500,
			createdAt: moment(0)
		},
		{
			id: '8b80b9fe-b732-420f-934d-717ac788b94c',
			description: 'Gas bill',
			note: 'Note1',
			amount: 5000,
			createdAt: moment(0).add(4, 'days')
		},
		{
			id: '7e95bfc0-900a-41da-ac66-ec442b5170dd',
			description: 'Rent',
			note: '',
			amount: 109500,
			createdAt: moment(0).subtract(-4, 'days')
		}
	],
	filters: {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	}
}

export const expenses = state.expenses;
export const filter = state.filters;