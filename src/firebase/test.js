import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('ECiQN9QX7kQWpeqWFvfM')
  .collection('cartItems')
  .doc('YliQETGIIqXE8LxhfJos');

firestore.doc('/users/ECiQN9QX7kQWpeqWFvfM/cartItems/YliQETGIIqXE8LxhfJos');
firestore.collection('/users/ECiQN9QX7kQWpeqWFvfM/cartItems');
