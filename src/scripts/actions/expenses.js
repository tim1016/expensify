// import uuid from 'uuid';
import database from '../firebase/firebase';
// ADD_EXPENSE
export const addExpense = expense => (
  {
    type: 'ADD_EXPENSE',
    expense
  }
);

export const startAddExpense = (expenseData = {}) => (dispatch) => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expenseData;
  const expense = {
    description, note, amount, createdAt
  };

  return database.ref('expenses').push(expense).then((ref) => {
    dispatch(addExpense({
      ...expense,
      id: ref.key
    }));
  });
};

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET EXPENSES
export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});


// eslint-disable-next-line arrow-body-style
export const startSetExpenses = () => {
  // eslint-disable-next-line arrow-body-style
  return (dispatch) => {
    return database.ref('expenses').once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
