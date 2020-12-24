import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAzsyjoRPPj5iQm5e7BuzcxXm8L-15S-mE',
  authDomain: 'crown-clothing-70e2e.firebaseapp.com',
  projectId: 'crown-clothing-70e2e',
  storageBucket: 'crown-clothing-70e2e.appspot.com',
  messagingSenderId: '693365777973',
  appId: '1:693365777973:web:bfa7e24c88945b1b45f37c',
  measurementId: 'G-74RG0ZPZJH',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
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
