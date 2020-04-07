import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXQ40Q3hoA3tYSW4Jn8FKZHZMmmDt1lDg",
  authDomain: "crwn-ecommerce-70451.firebaseapp.com",
  databaseURL: "https://crwn-ecommerce-70451.firebaseio.com",
  projectId: "crwn-ecommerce-70451",
  storageBucket: "crwn-ecommerce-70451.appspot.com",
  messagingSenderId: "101045766666",
  appId: "1:101045766666:web:d679d278fffb1a75ccedf3",
  measurementId: "G-SZ3CBN590K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
