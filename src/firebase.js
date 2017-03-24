import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBIXwLVc6TuIIrMv_KYu3nOYGe_KrJHkD4",
  authDomain: "chatapp-cb429.firebaseapp.com",
  databaseURL: "https://chatapp-cb429.firebaseio.com",
  storageBucket: "chatapp-cb429.appspot.com",
  messagingSenderId: "1031747160039"
};
firebase.initializeApp(config);

export default firebase;
