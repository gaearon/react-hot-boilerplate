// In this demo, we show two things:

// - You can edit classes even though they're not exported
// - You can throw errors inside render() method and they'll be handled

// We achieve this by using babel-plugin-wrap-react-components
// to find all React components, and configuring it via .babelrc
// to use a custom wrapper function.

// Our wrapper function is defined in transforms/index.js.
// It delegates to two different wrappers:

// - hotify uses react-proxy to hot reload components
// - catchRenderErrors.. well, catches render errors

// Note how wrappers are composable and can be distributed on NPM
// as separate packages.

import { shouldAcceptFilename } from './transforms/hotify';
if (shouldAcceptFilename(__filename)) {
  module.hot.accept();
}

import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { TimerA, TimerB } from './timers';

var RandomNumber = React.createClass({
  componentWillMount() {
    this.num = Math.random();
  },

  render() {
    return <div>Random number: {this.num}</div>
  }
});

export default class App extends Component {
  render() {
    return (
      <div>
        <TimerA />
        <TimerB />
        <RandomNumber />
      </div>
    );
  }
}