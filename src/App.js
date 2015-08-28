import React, { Component } from 'react';
import autobind from 'autobind-decorator';

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

var RandomNumber = React.createClass({
  componentWillMount() {
    this.num = Math.random();
  },

  render() {
    return <div>Random number: {this.num}</div>
  }
});

class TimerA extends Component {
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
      <div style={{ color: 'red' }}>
        <h2>{this.props.children}</h2>
        <h3>Renderer own state: {this.state.counter}</h3>
      </div>
    );
  }
}

class TimerB extends Component {
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
        <h3>Renderer own state: {this.state.counter}</h3>
      </div>
    );
  }
}

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

module.hot.accept();