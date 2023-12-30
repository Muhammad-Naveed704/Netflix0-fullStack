
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCHVuImeCQ1dn-wsn6JjP5WT_CvNOpyG_o",
    authDomain: "netflix0-fc9f3.firebaseapp.com",
    projectId: "netflix0-fc9f3",
    storageBucket: "netflix0-fc9f3.appspot.com",
    messagingSenderId: "494338820292",
    appId: "1:494338820292:web:241e30e6741c83b8916191"
  };
 
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;





//   firebase.initializeApp(firebaseConfig);
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth()
//   export  {auth};
//   export default  db;
  

