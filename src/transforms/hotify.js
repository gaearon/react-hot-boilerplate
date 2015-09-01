import React from 'react';
import { createProxy, getForceUpdate } from 'react-proxy';

if (!window.__reactProxies) {
  window.__reactProxies = {};
}

const forceUpdate = getForceUpdate(React);

export default function hotify({ filename, uniqueId, isInFunction }) {
  return function (ReactClass) {
    if (isInFunction) {
      return ReactClass;
    }

    const globalUniqueId = `${filename}:${uniqueId}`;
    if (window.__reactProxies[globalUniqueId]) {
      console.info(`updating ${globalUniqueId}`);
      const instances = window.__reactProxies[globalUniqueId].update(ReactClass);
      requestAnimationFrame(() => {
        instances.forEach(forceUpdate);
      });
    } else {
      console.info(`proxying ${globalUniqueId}`);
      window.__reactProxies[globalUniqueId] = createProxy(ReactClass);
    }

    return window.__reactProxies[globalUniqueId].get();
  };
}
