import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA-BtdmnR4xO72ESxdrcNW9f1f1URSA2wQ',
  authDomain: 'gareta-ace47.firebaseapp.com',
  databaseURL: 'https://gareta-ace47.firebaseio.com',
  projectId: 'gareta-ace47',
  storageBucket: '',
  messagingSenderId: '853378040674',
  appId: '1:853378040674:web:aa460a5b2ca063db'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
