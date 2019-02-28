import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('test action filter: setTextFilter', ()=>{
    const action = setTextFilter('filter');
    expect(action).toEqual(
        {type: 'SET_TEXT_FILTER',
        text: 'filter'}
    )
});

test('test action filter(empty): setTextFilter', ()=>{
    const action = setTextFilter();
    expect(action).toEqual(
        {type: 'SET_TEXT_FILTER',
        text: ''}
    )
});

test('test action filter: sortByDate', ()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('test action filter: sortByAmount', ()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});


test ('test action set start date', ()=>{
    const now = moment();
    const action = setStartDate(now);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: now
    })
});

test ('test action set end date', ()=>{
    const now = moment();
    const action = setEndDate(now);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: now
    })
});
