import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//configuration data from my firebase project
const config = {
  apiKey: "AIzaSyD3xgmfvKucMyGJjF_hhd_uKdtjdD5sIKA",
  authDomain: "diploma-project-7e8ae.firebaseapp.com",
  databaseURL: "https://diploma-project-7e8ae.firebaseio.com",
  projectId: "diploma-project-7e8ae",
  storageBucket: "diploma-project-7e8ae.appspot.com",
  messagingSenderId: "365358806783",
  appId: "1:365358806783:web:0e030664df202b779dbeca",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

//set-up Google-Authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
//trigger the Google pop-up when we use GoogleAuthProvider for authentication and sign-in
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//function for saving a user to the database
export const saveUserDataToDb = async (user, additionalInfo = null) => {
  //perform SAVE TO DB if we get back an user object which means that the user signed in
  //if the user signs out, we'll get back a null object
  if (user === null) return;
  const userReference = firestore.doc(`users/${user.uid}`);
  const userSnapshot = await userReference.get();
  //if user does not exist in our DB, we'll add it to our DB
  if (userSnapshot.exists === false) {
    const { displayName, email } = user;
    const date = new Date();
    try {
      await userReference.set({
        displayName,
        email,
        date,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error saving user to DB", error.message);
    }
  }
  return userReference;
};

export default firebase;
