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
  apiKey: "AIzaSyAqMYNM0p5zQBBUN_uqVKqjXC-zXjN1M78",
  authDomain: "group-app-a4b27.firebaseapp.com",
  projectId: "group-app-a4b27",
  storageBucket: "group-app-a4b27.appspot.com",
  messagingSenderId: "471498411210",
  appId: "1:471498411210:web:c3c31a86b22b4e3d32b833",
  measurementId: "G-0SGFFT9BZ0",
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
