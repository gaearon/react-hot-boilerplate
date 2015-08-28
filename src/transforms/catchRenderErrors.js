import React from 'react';

export default function catchRenderErrors(filename, displayName) {
  return function transform(ReactClass) {
    const originalRender = ReactClass.prototype.render;
    ReactClass.prototype.render = function tryRender() {
      try {
        return originalRender.apply(this, arguments);
      } catch (err) {
        console.error(err);
        return React.createElement('div', {
          style: {
           backgroundColor: 'pink',
           color: 'white'
          }
        }, `Error rendering ${displayName}: ${err.toString()}`);
      }
    };
    return ReactClass;
  }
}