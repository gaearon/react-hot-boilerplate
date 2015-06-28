react-hot-boilerplate
=====================

The minimal dev environment to enable live-editing React components.

### Usage

```
npm install
npm start
open http://localhost:3000
```

Now edit `src/App.js`.
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Building for production

Simply invoke `webpack -p` and `static/bundle.js` will be generated. The `-p` flag tells tells Webpack to minify the code.

### Using `0.0.0.0` as Host

You may want to append `--host 0.0.0.0` to the `start` script in `package.json` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

### Missing Features

This boilerplate is purposefully simple to show the minimal configuration for React Hot Loader. For a real project, you'll want to fine-tune the configuration to suit your project needs. You'll also want to add a router, styles and maybe combine dev server with an existing server. This is out of scope of this boilerplate, but you may want to look into [other starter kits](https://github.com/gaearon/react-hot-loader/blob/master/docs/README.md#starter-kits).

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* Ping dan_abramov on Twitter or #reactjs IRC
