import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCi-QaoMmnQjSdCQ27QN31gMLH_-rM1Mlo",
  authDomain: "auth-d8e66.firebaseapp.com",
  projectId: "auth-d8e66",
  storageBucket: "auth-d8e66.appspot.com",
  messagingSenderId: "143289454273",
  appId: "1:143289454273:web:ca05364c2b2e3d5ffb4e40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)