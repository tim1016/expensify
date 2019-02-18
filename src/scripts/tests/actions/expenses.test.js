import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import uuid from 'uuid';
import moment from 'moment';

test('should set up remove expense action object', ()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should set up edit expense object', ()=>{

    const updates ={
        description: `edit extense test object`,
        note: 'no note',
        amount: '123' ,
        createdAt: moment('2013-03-01')
    }
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: `edit extense test object`,
            note: 'no note',
            amount: '123' ,
            createdAt: moment('2013-03-01')
        }
    })
});


test('should set up Add expense object', ()=>{

    const expenseData ={
        description: `add expense test object`,
        note: 'no note',
        amount: '123' ,
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    })
});


test('Add expense default object', ()=>{


    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : '', 
            note : '', 
            amount : 0, 
            createdAt : 0,
            id:expect.any(String)
        }
    })
});