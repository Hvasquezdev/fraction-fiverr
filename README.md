# Fraction Project for Fiverr

## What's included

The `npm` dependencies included in `package.json` are:

* <code>[bulma](https://github.com/jgthms/bulma)</code>
* <code>[node-sass](https://github.com/sass/node-sass)</code> to compile your own Sass file
* <code>[postcss-cli](https://github.com/postcss/postcss-cli)</code> and <code>[autoprefixer](https://github.com/postcss/autoprefixer)</code> to add support for older browsers
* <code>[babel-cli](https://babeljs.io/docs/usage/cli/)</code>, <code>[babel-preset-env](https://github.com/babel/babel-preset-env)</code> and <code>[babel-preset-es2015-ie](https://github.com/jmcriffey/babel-preset-es2015-ie)</code> for compiling ES6 JavaScript files

Apart from `package.json`, the following files are included:

* `.babel.config.js` configuration file for [Babel](https://babeljs.io/)
* `.gitignore` common [Git](https://git-scm.com/) ignored files
* `index.html` this HTML5 file
* `_sass/main.scss` a basic SCSS file that **imports Bulma** and explains how to **customize** your styles, and compiles to `css/main.css`
* `_javascript/main.js` an ES6 JavaScript that compiles to `lib/main.js`


## Run the code

Open the console and go to the root folder of the project and run:

```sh
npm install
npm start
```

As long as `npm start` is running, it will **watch** your changes. You can edit `_sass/main.scss` and `_javascript/main.js` at will. Changes are **immediately** compiled to their destinations, where `index.html` will pick them up upon reload in your browser.

Use `npm run` to show all available commands:

```sh
Lifecycle scripts included in bulma-start:
  start
    npm-run-all --parallel css-watch js-watch

available via `npm run-script`:
  css-build
    node-sass _sass/main.scss css/main.css
  css-deploy
    npm run css-build && npm run css-postcss
  css-postcss
    postcss --use autoprefixer --output css/main.css css/main.css
  css-watch
    npm run css-build -- --watch
  deploy
    npm run css-deploy && npm run js-build
  js-build
    babel _javascript --out-dir lib
  js-watch
    npm run js-build -- --watch
```

If you want to learn more, follow these links: [Bulma homepage](http://bulma.io) and [Documentation](http://bulma.io/documentation/overview/start/).