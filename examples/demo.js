import { render } from 'solid-js/dom';
import { ContextProvider, Route, Router, Link, useParams } from '../src/client';

function SimpleApp() {
  return (
    <ContextProvider>
      <Router fallback={'fallback'}>
        <Route path="/">
          {() => {
            return (
              <div>
                <p>Home</p>
                <Link href="/store">goto store</Link>
              </div>
            );
          }}
        </Route>
        <Route path="/store">
          {() => {
            console.log('store');
            return (
              <div>
                <p>store</p>
                <Router fallback={'fallback-2'}>
                  <Route path="/" exact>
                    {() => {
                      console.log('store home');
                      return (
                        <div>
                          <p>store home</p>
                          <Link href="/store/1">goto detail</Link>
                        </div>
                      );
                    }}
                  </Route>
                  <Route path="/:id">
                    {() => {
                      console.log('store detail');
                      return <div>detail</div>;
                    }}
                  </Route>
                </Router>
              </div>
            );
          }}
        </Route>
      </Router>
    </ContextProvider>
  );
}

render(() => <SimpleApp />, document.getElementById('app'));
