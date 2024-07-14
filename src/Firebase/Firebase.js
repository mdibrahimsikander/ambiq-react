// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API}`,
    authDomain: "datastore-6f62a.firebaseapp.com",
    databaseURL: "https://datastore-6f62a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "datastore-6f62a",
    storageBucket: "datastore-6f62a.appspot.com",
    messagingSenderId: "709034801139",
    appId: "1:709034801139:web:72b3934e36c029d86f8486",
    measurementId: "G-NGJ5DKCC1B"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, set, get, child };
