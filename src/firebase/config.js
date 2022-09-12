import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  collection,
  connectFirestoreEmulator,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDidj4A1k0MRYy8jw-xtUsx6p2Tx4oA4lc",
  authDomain: "rich-api-31a31.firebaseapp.com",
  projectId: "rich-api-31a31",
  storageBucket: "rich-api-31a31.appspot.com",
  messagingSenderId: "611387516126",
  appId: "1:611387516126:web:44c4c5b07ff7dfd26f0e4f",
  measurementId: "G-G1JS4LX8Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, (user) => {
//   // Check for user status
// });
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
// export default firebase;
