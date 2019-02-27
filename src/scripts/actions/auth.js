/* eslint-disable arrow-body-style */
import { firebase, googleAuthProvider } from '../firebase/firebase';

// eslint-disable-next-line arrow-body-style
export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(function(result) {return result})
      .catch(function(error) {console.log(error.code, error.message)})
  };
};
