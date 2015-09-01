import { shouldAcceptFilename } from './transforms/hotify';
if (shouldAcceptFilename(__filename)) {
  module.hot.accept();
}


import React, { Component } from 'react';
import { COOL_COLOR } from './colors';

export class TimerA extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ color: COOL_COLOR }}>
        <h2>{this.props.children}</h2>
        <h3>TimerA state: {this.state.counter}</h3>
      </div>
    );
  }
}

export class TimerB extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 300);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ color: 'blue' }}>
        <h2>{this.props.children}</h2>
        <h3>TimerB state: {this.state.counter}</h3>
      </div>
    );
  }
}