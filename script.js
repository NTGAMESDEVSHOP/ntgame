const express = require('express');
const axios = require('axios');
const session = require('express-session');
const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyA...YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg12345"
};