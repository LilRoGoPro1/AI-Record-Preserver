import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyAn5MriXYiQU2SmwE2vdtt4C1TncSjsW4U",

    authDomain: "vaelos.firebaseapp.com",

    projectId: "vaelos",

    storageBucket: "vaelos.firebasestorage.app",

    messagingSenderId: "371939022920",

    appId: "1:371939022920:web:82b7efe23619cec945e07d",

    measurementId: "G-6VGP3XJGR7"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {

    auth,

    provider

};
