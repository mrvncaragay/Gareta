import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Keys
import api from '../config';

const config = {
  apiKey: api.REACT_APP_APIKEY,
  authDomain: api.REACT_APP_authDomain,
  databaseURL: api.REACT_APP_databaseURL,
  projectId: api.REACT_APP_projectId,
  storageBucket: api.REACT_APP_storageBucket,
  messagingSenderId: api.REACT_APP_messagingSenderId,
  appId: api.REACT_APP_appId
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
