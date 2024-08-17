const express = require('express');
const axios = require('axios');
const session = require('express-session');
const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyDXuTt8kwVlU7g7-q-jHmMlbS2j40joUdE",
    authDomain: "ntdevweb.firebaseapp.com",
    projectId: "ntdevweb",
    storageBucket: "ntdevweb.appspot.com",
    messagingSenderId: "271632846990",
    appId: "1:271632846990:web:ea0484d4a0d4fc965c79df",
    measurementId: "G-CWBFW7Z22B"
};