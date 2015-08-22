import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import hot from './hot';

@hot('RendererA')
class RendererA extends Component {
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

  // Feel free to edit this
  render() {
    return (
      <div style={{ color: 'green' }}>
        <h2>{this.props.children}</h2>
        <h3>Renderer own state: {this.state.counter}</h3>
      </div>
    );
  }
}

@hot('RendererB')
class RendererB extends Component {
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

  // Feel free to edit this
  render() {
    return (
      <div style={{ color: 'blue' }}>
        <h2>{this.props.children}</h2>
        <h3>Renderer own state: {this.state.counter}</h3>
      </div>
    );
  }
}

function makeSomething(Renderer, speed) {
  return class Something extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }

    componentDidMount() {
      this.tick();
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    @autobind
    tick() {
      this.setState({
        counter: this.state.counter + 1
      }, () => {
        this.timeout = setTimeout(this.tick, speed);
      });
    }

    // Feel free to edit this
    render() {
      return (
        <div>
          <Renderer>HOC state: {this.state.counter}</Renderer>
        </div>
      );
    }
  };
}

let Something1 = hot('makeSomething$Something1')(
  // Feel free to edit this
  makeSomething(RendererA, 100)
);
let Something2 = hot('makeSomething$Something2')(
  // Feel free to edit this
  makeSomething(RendererB, 100)
);

@hot('App')
export default class App extends Component {
  // Feel free to edit this
  render() {
    return (
      <div>
        <Something1 />
        <Something2 />
        nice uh
      </div>
    );
  }
}

module.hot.accept();