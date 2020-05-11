import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3xgmfvKucMyGJjF_hhd_uKdtjdD5sIKA",
    authDomain: "diploma-project-7e8ae.firebaseapp.com",
    databaseURL: "https://diploma-project-7e8ae.firebaseio.com",
    projectId: "diploma-project-7e8ae",
    storageBucket: "diploma-project-7e8ae.appspot.com",
    messagingSenderId: "365358806783",
    appId: "1:365358806783:web:0e030664df202b779dbeca"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //set-up Google Authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
    //trigger the Google pop-up when we use GoogleAuthProvider for authentication and sign-in
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
