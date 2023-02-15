// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeiDpB8Cet4Rf1Zr5jsWq-yvGwOgWO6Cg",
  authDomain: "netflix-clone-7e6ad.firebaseapp.com",
  projectId: "netflix-clone-7e6ad",
  storageBucket: "netflix-clone-7e6ad.appspot.com",
  messagingSenderId: "360449940185",
  appId: "1:360449940185:web:e2b2abc85490203ee23cc8",
  measurementId: "G-DBC3S22N9E",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
//const analytics = getAnalytics(app);

export default app;

export { db, auth };
