import React, { Component } from 'react';
// Firebase
import Rebase  from 're-base';
var base = Rebase.createClass('https://dekuazim.firebaseio.com/');

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}
