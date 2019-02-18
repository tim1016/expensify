import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import {expenses, filter} from '../fixtures/state';



test('test selectors: filter by text', ()=>{
	filter.text='e';
	const action = getVisibleExpenses(expenses, filter);
	// console.log(action);
	expect(action).toEqual([expenses[2], expenses[0]]);
});

test('test selector: sortByDate', ()=>{
	filter.sortBy = 'date'
	const action = getVisibleExpenses(expenses, filter);
	expect(action).valueOf([expenses[2], expenses[0], expenses[1]]);
});

test('test selector: sortByAmount', ()=>{
	filter.sortBy = 'amount'
	const action = getVisibleExpenses(expenses, filter);
	expect(action).valueOf([expenses[2], expenses[1], expenses[0]]);
});

test('test selector: filterStartDate', ()=>{
	filter.startDate = moment(0).add(1, 'days');
	filter.sortBy = 'date';
	const action = getVisibleExpenses(expenses, filter);
	expect(action).valueOf([expenses[1], expenses[2]]);
});

test('test selector: filterEndDate', ()=>{
	filter.endDate = moment(0).add(1, 'days');
	filter.sortBy = 'date';
	const action = getVisibleExpenses(expenses, filter);
	expect(action).valueOf([expenses[1], expenses[0]]);
});