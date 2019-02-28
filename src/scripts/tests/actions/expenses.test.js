/* eslint-disable prefer-destructuring */
/* eslint-disable object-curly-newline */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import {
  startAddExpense,
  addExpense,
  startRemoveExpense,
  removeExpense,
  startEditExpense,
  editExpense,
  startSetExpenses,
  setExpenses
} from '../../actions/expenses';
import { expenses } from '../fixtures/state';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  // eslint-disable-next-line object-curly-newline
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done());
});


test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should set up edit expense object', () => {
  const updates = {
    description: 'edit extense test object',
    note: 'no note',
    amount: '123',
    createdAt: moment('2013-03-01')
  };
  const action = editExpense('123abc', updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'edit extense test object',
      note: 'no note',
      amount: '123',
      createdAt: moment('2013-03-01')
    }
  });
});


test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = {
    amount: 255
  };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});


test('should set up Add expense object', () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenses[0],
      id: expect.any(String)
    }
  });
});

test('Add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);

  const expenseData = {
    description: 'Mouse',
    amount: 4000,
    note: 'This one is better',
    createdAt: 100
  };

  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});


test('Add expense to database and store with defaultvalues', (done) => {
  const store = createMockStore({ auth: { uid } });


  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          description: '',
          note: '',
          amount: 0,
          createdAt: 0,
          id: expect.any(String)
        }
      });
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual({
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      });
      done();
    });
});


test('set up set expense object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should set expenses on firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});
