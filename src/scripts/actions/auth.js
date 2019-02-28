/* eslint-disable */
import { firebase, googleAuthProvider } from '../firebase/firebase';
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});
// eslint-disable-next-line arrow-body-style
export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(result => {return result}) 
      .catch(error => {console.log(error.code, error.message)})
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};



