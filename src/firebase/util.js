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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // Request a batch request
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const convertCategoriesSnapshotToMap = categories => {
  const transformedCategories = categories.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id
    };
  });

  return transformedCategories;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();

      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
