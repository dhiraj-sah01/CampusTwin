import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXaXyP0AwfPw2Zu2I5WE08Y3djugljNj0",
  authDomain: "campustwin.firebaseapp.com",
  projectId: "campustwin",
  storageBucket: "campustwin.firebasestorage.app",
  messagingSenderId: "143908179014",
  appId: "1:143908179014:web:23d38a6d8a71d5a0e3ce47",
  measurementId: "G-RFZYM4H097",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
