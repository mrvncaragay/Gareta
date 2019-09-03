import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('user id')
  .collection('cartItems')
  .doc('item id')
  .then(data => console.log(data));

// OR
firestore.doc('/users/user id/carItems/item id');
