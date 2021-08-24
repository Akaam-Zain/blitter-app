import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDmdXYOUTaQFnN1i0rvc__n_--MPB8kZ_Q",
  authDomain: "blitter-b27df.firebaseapp.com",
  projectId: "blitter-b27df",
  storageBucket: "blitter-b27df.appspot.com",
  messagingSenderId: "783431328652",
  appId: "1:783431328652:web:ce0e77b81bc16224d52ca9",
  measurementId: "G-X04G61QJH2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
export const auth = firebaseApp.auth();
