import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
const render = (Component, callback) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
    callback,
  );
};

render(App, () => {
  if (module.hot) {
    module.hot.accept('./App', () => render(App));
  }
});
