import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyAakRFh66h_N6X1AEHNNgDPJfrz2szCwyA",
  authDomain: "hrm-31be0.firebaseapp.com",
  projectId: "hrm-31be0",
  storageBucket: "hrm-31be0.appspot.com",
  messagingSenderId: "1026772191852",
  appId: "1:1026772191852:web:7e157fe97bad584093a649",
  measurementId: "G-BXQ3JW9SC0"
};


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); 


export { db, storage, analytics, auth }; 
