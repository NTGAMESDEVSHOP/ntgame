const express = require('express');
const axios = require('axios');
const session = require('express-session');
const app = express();
 document.getElementById('logout-button').addEventListener('click', function() {
            auth.signOut().then(() => {
                window.location.href = 'login.html'; // Redirect to login page after sign out
            }).catch((error) => {
                console.error('Error signing out: ', error);
            });
        });

const firebaseConfig = {
  apiKey: "AIzaSyDXuTt8kwVlU7g7-q-jHmMlbS2j40joUdE",
    authDomain: "ntdevweb.firebaseapp.com",
    projectId: "ntdevweb",
    storageBucket: "ntdevweb.appspot.com",
    messagingSenderId: "271632846990",
    appId: "1:271632846990:web:ea0484d4a0d4fc965c79df",
    measurementId: "G-CWBFW7Z22B"
};