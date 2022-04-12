// Import the functions you need from the SDKs you need
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfnZCT4IBwk7jqjsyiTaBkkiqn49JOTZM",
    authDomain: "pizza-guyz.firebaseapp.com",
    projectId: "pizza-guyz",
    storageBucket: "pizza-guyz.appspot.com",
    messagingSenderId: "849472704298",
    appId: "1:849472704298:web:f2b921dc612243a6619853",
    measurementId: "G-FNRET3W3QB"
  };


  firebase.initializeApp(firebaseConfig);

export default firebase