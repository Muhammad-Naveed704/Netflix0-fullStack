
// import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
  

