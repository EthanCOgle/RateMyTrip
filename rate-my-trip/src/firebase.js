// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3XmQbJdhJmka-Ruyy7bzLh3z9TiJIe10",
  authDomain: "ratemytrip-adca4.firebaseapp.com",
  projectId: "ratemytrip-adca4",
  storageBucket: "ratemytrip-adca4.appspot.com",
  messagingSenderId: "874761439744",
  appId: "1:874761439744:web:06b43e75a01875543926e5",
  measurementId: "G-6WGZTRNVJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);