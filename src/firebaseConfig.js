// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDjYwVm5V02iXMeERM4KpiQxFxhE_wkU",
  authDomain: "linkedin-clone-45f85.firebaseapp.com",
  projectId: "linkedin-clone-45f85",
  storageBucket: "linkedin-clone-45f85.appspot.com",
  messagingSenderId: "515634950316",
  appId: "1:515634950316:web:4e6574e3f0db76fee0ef09",
  measurementId: "G-QYNR9Z3DB9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);