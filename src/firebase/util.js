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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Find user in the database
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Get the user data
  const snapShot = await userRef.get();

  // If user is not registered
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
