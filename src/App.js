import React, { Component } from 'react';
import reactFire from 'reactfire';
import firebase from 'firebase';
import reactMixin from 'react-mixin';

export default class App extends Component {
  componentDidMount(){
    console.log('componentDidMount')
    firebase.auth().signInWithEmailAndPassword('siteuser@urizenventures.com', 'FilipinosRule').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <main>
          This is where I want to see things.
        </main>
      </div>
    );
  }
}

reactMixin.onClass(App, reactFire);
