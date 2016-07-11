import React, { Component } from 'react';
import Card1 from './cards/card1/Card1.jsx';
import Card2 from './cards/card2/Card2.jsx';
import Home from './home/Home.jsx';
import Nav from './nav/Nav.jsx';
import './sass/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

// <Card1 cardType="video" />
// <Card2 cardType="video2" />
