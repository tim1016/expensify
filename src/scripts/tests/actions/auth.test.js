import { login, logout } from '../../actions/auth';

test('test action login', () => {
  const action = login(1);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 1
  });
});

test('test action logout', () => {
  const action = logout(1);
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
