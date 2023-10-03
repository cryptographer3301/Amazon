/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDoXXAsF2rigcvOaHaV88KQUGQHqAaZ0rI",
  authDomain: "fir-c194b.firebaseapp.com",
  projectId: "fir-c194b",
  storageBucket: "fir-c194b.appspot.com",
  messagingSenderId: "938685991444",
  appId: "1:938685991444:web:33a1bfe3899c887e1df501",
  measurementId: "G-VFQRJTF44E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);