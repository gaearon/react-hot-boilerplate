import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Initialize Firebase
import firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyDB5n2KmqVzQJXMuFI1sLcMG7eq3-97-Nc",
  authDomain: "dekuazim.firebaseapp.com",
  databaseURL: "https://dekuazim.firebaseio.com",
  storageBucket: "dekuazim.appspot.com",
});

ReactDOM.render(<App />, document.getElementById('root'));
