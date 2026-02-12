import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBu6Znyhe-ldcLkSv2Foslqijcb4wtyqJ8",
  authDomain: "shopsphere-4a573.firebaseapp.com",
  projectId: "shopsphere-4a573",
  storageBucket: "shopsphere-4a573.firebasestorage.app",
  messagingSenderId: "410246702906",
  appId: "1:410246702906:web:da792a69c426a844439203",
  measurementId: "G-1LNDY8Y514"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
