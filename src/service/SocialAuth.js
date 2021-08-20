import firebase from "firebase";
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = firebase
  .auth()
  .signInWithPopup(googleAuthProvider);
