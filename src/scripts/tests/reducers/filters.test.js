import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultState = {
    text: '',
    sortBy: 'date', // or date
    startDate: moment(0),
    endDate: moment(0)
} 


test('Test filter reducers', ()=>{
	const state = filtersReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual(
		{
			text: '',
			sortBy: 'date', // or date
			startDate: moment().startOf('month'),
			endDate: moment().endOf('month')
		}
	)
});

test('Reducer sortByAmount', ()=>{
	const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state).toEqual({...state, sortBy: "amount"});
});


test('Reducer sortByDate', ()=>{
	const action = filtersReducer(defaultState, 'SORT_BY_DATE');
	expect(defaultState.sortBy).toBe("date");
});

const filterAction = {
	type : undefined,
	startDate : moment(0),
	endDate : moment(0),
}

test('Reducer setStartDate', ()=>{
	filterAction.type =  'SET_START_DATE';
	const action = filtersReducer(defaultState, filterAction);
	expect(defaultState.startDate).toEqual(moment(0));
});

test('Reducer setEndDate', ()=>{
	filterAction.type =  'SET_END_DATE';
	const action = filtersReducer(defaultState, filterAction);
	expect(defaultState.endDate).toEqual(moment(0));
});

test('Reducer setEndDate', ()=>{
	defaultState.text = 'test';
	filterAction.type =  'SET_END_DATE';
	const action = filtersReducer(defaultState, filterAction);
	expect(defaultState.text).toBe('test');
});