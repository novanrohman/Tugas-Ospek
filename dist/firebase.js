// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7-kPTLSkzZiWtu06o_YTi5BG_7QkB0c4",
  authDomain: "portfolio-df18c.firebaseapp.com",
  projectId: "portfolio-df18c",
  storageBucket: "portfolio-df18c.appspot.com",
  messagingSenderId: "882690857883",
  appId: "1:882690857883:web:598bb4293cff04a7acdf3e",
  measurementId: "G-WG6STS71K1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);