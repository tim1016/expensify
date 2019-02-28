import authReducer from '../../reducers/auth';

const defaultState = {};

test('Test auth reducers', () => {
  const state = authReducer(defaultState, { type: '@@INIT' });
  expect(state).toEqual({});
});


test('Reducer auth login', () => {
  const uid = 'test123';
  const state = authReducer(defaultState, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});


test('Reducer auth logout', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
