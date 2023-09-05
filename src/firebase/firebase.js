import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvHS13vBqi5J4FOAHMLX8T0Yk9PZyA7oo",
  authDomain: "filmyverse-c1b8a.firebaseapp.com",
  projectId: "filmyverse-c1b8a",
  storageBucket: "filmyverse-c1b8a.appspot.com",
  messagingSenderId: "931229204732",
  appId: "1:931229204732:web:8216f0baab9fd2b429d779"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db, "movies")
export const reviewsRef = collection(db, "reviews")

export default app

