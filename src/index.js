import { shouldAcceptFilename } from './transforms/hotify';
if (shouldAcceptFilename(__filename)) {
  module.hot.accept();
}


import React from 'react';
import App from './App';

React.render(<App />, document.getElementById('root'));
