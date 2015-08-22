import React from 'react';
import { createProxy, getForceUpdate } from 'react-proxy';

if (!window.__reactProxies) {
  window.__reactProxies = {};
}

const forceUpdate = getForceUpdate(React);

export default function hot(id) {
  return function (ReactClass) {
    if (window.__reactProxies[id]) {
      console.info(`updating ${id}`);
      const instances = window.__reactProxies[id].update(ReactClass);
      requestAnimationFrame(() => {
        instances.forEach(forceUpdate);
      });
    } else {
      console.info(`creating ${id}`);
      window.__reactProxies[id] = createProxy(ReactClass);
    }

    return window.__reactProxies[id].get();
  };
}
