// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDyXkF5dJFwAzVNWspqEKpOWrWc0p2EfTY',
  authDomain: 'facebook-messenger-clone-1067d.firebaseapp.com',
  databaseURL: 'https://facebook-messenger-clone.firebaseio.com',
  projectId: 'facebook-messenger-clone-1067d',
  storageBucket: 'facebook-messenger-clone-1067d.appspot.com',
  messagingSenderId: '905329381154',
  appId: '1:905329381154:web:145fc4ccd695d57ece1f7b',
  measurementId: 'G-KR6BCJVH7P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
