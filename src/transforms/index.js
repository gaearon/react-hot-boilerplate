import hotify from './hotify';
import catchRenderErrors from './catchRenderErrors';

export default function (filename, displayName) {
  return function (ReactClass) {
    return catchRenderErrors(filename, displayName)(
      hotify(filename, displayName)(
        ReactClass
      )
    );
  }
}