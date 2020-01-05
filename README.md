# solid-router

[![Build Status](https://travis-ci.com/mduclehcm/solid-router.svg?branch=master)](https://travis-ci.com/mduclehcm/solid-router)
[![version](https://img.shields.io/npm/v/solid-router)]('https://www.npmjs.com/package/solid-router')
![NPM](https://img.shields.io/npm/l/solid-router)

A declarative router for [solid-js](https://github.com/ryansolid/solid/tree/master/packages/solid)

## Installation

```bash
npm install solid-router
```

## Usage

### Simple routing

```jsx
import { render } from 'solid-js/dom';
import { ContextProvider } from 'solid-router';

render(
  () => (
    <ContextProvider>
      {() => (
        <div>
          <Router fallback={<p>404 Page</p>}>
            <Route path="/">{() => <p>HomePage</p>}</Route>
            <Route path="/aboud">{() => <p>AboutPage</p>}</Route>
          </Router>
        </div>
      )}
    </ContextProvider>
  ),
  document.getElementById('root'),
);
```

## Server Side Rendering

```js
import http from 'http';
import { renderToString } from 'solid-js/dom';
// webpack: alias to 'solid-router/server'
import { ContextProvider } from 'solid-router';
import App from './app';

const server = http.createServer((req, res) => {
  res.write(
    renderToString(() => (
      <ContextProvider
        options={{
          initialEntries: [req.url],
        }}
      >
        {() => <App />}
      </ContextProvider>
    )),
  );
  res.end();
});

server.listen(8080, () => {
  console.log('application running at port 8080');
});
```

## Examples

- Simple routing [codesanbox](https://codesandbox.io/s/solid-router-sqnyy?fontsize=14&hidenavigation=1&theme=dark)
- Route params [codesanbox](https://codesandbox.io/s/solid-router-simple-router-u4003?fontsize=14&hidenavigation=1&theme=dark)
