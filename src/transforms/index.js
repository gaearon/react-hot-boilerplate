import hotify from './hotify';
import catchRenderErrors from './catchRenderErrors';

export default function (filename, components) {
  let wrapToCatch = catchRenderErrors(filename, components);
  let wrapToHotify = hotify(filename, components);

  return id => ReactClass => {
    return wrapToCatch(id)(
      wrapToHotify(id)(
        ReactClass
      )
    );
  }
}