// Import the functions you need from the SDKs you need
import firebase from  './firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYrG5zP2857CSV8ra_t34Wo4dLuLbquak",
  authDomain: "slack-7612b.firebaseapp.com",
  projectId: "slack-7612b",
  storageBucket: "slack-7612b.appspot.com",
  messagingSenderId: "288969889865",
  appId: "1:288969889865:web:bc3a2cb020ec06094d0798",
  measurementId: "G-8EJF8PLYTJ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Initialize Firebase

export default firebase;