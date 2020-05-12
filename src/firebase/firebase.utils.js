import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3xgmfvKucMyGJjF_hhd_uKdtjdD5sIKA",
  authDomain: "diploma-project-7e8ae.firebaseapp.com",
  databaseURL: "https://diploma-project-7e8ae.firebaseio.com",
  projectId: "diploma-project-7e8ae",
  storageBucket: "diploma-project-7e8ae.appspot.com",
  messagingSenderId: "365358806783",
  appId: "1:365358806783:web:0e030664df202b779dbeca",
};

//general function for saving a user to the db
export const createUserProfileDocument = async (userAuth, additionalData=null) => {
  //perform SAVE TO DB if we get back an userAuth object which means that the user signed in
  //if the user signs out, we'll get back a null object
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  //if user does not exist in our DB, add it to our DB
  if (!snapshot.exists) {
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
      console.log("error saving user to db", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set-up Google Authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
//trigger the Google pop-up when we use GoogleAuthProvider for authentication and sign-in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
