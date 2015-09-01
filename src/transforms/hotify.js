import React from 'react';
import { createProxy, getForceUpdate } from 'react-proxy';

if (!window.__reactProxies) {
  window.__reactProxies = {};
  window.__reactFilenames = {};
}

const forceUpdate = getForceUpdate(React);

export function shouldAcceptFilename(filename) {
  return Object.keys(window.__reactFilenames).some(k => k.indexOf(filename) > -1);
}

export default function hotify(filename, components) {
  if (Object.keys(components).some(k => !components[k].isInFunction)) {
    window.__reactFilenames[filename] = true;
  }

  return uniqueId => ReactClass => {
    const { isInFunction = false } = components[uniqueId];
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
