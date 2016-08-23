import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Initialize Firebase
import firebase from 'firebase';
firebase.initializeApp({
  apiKey: // API KEY,
  authDomain: // AUTH DOMAIN,
  databaseURL: // dbURL,
  storageBucket: // Storage bucks,
});

ReactDOM.render(<App />, document.getElementById('root'));
