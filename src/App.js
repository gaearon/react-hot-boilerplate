import React, { Component } from 'react';
import Card1 from './card1/Card1.jsx';
import Card2 from './card2/Card2.jsx';
import Home from './home/Home.jsx';
import './sass/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <Card1 cardType="video" />
        <Card2 cardType="video2" />
        <Home />
      </div>
    );
  }
}
