import { createMemoryHistory } from 'history';
import { createRoot } from 'solid-js';
import { ContextProvider, Route, Router } from '../src/client';

describe('basic routing', () => {
  let container: HTMLDivElement, disposer: () => void;

  const Setup = (props: { path: string; children: any }) => {
    return (
      <div ref={container}>
        <ContextProvider
          history={createMemoryHistory({ initialEntries: [props.path] })}
        >
          {props.children}
        </ContextProvider>
      </div>
    );
  };

  function render(Component, props = {}) {
    createRoot((dispose) => {
      disposer = dispose;
      <Component {...props} />;
    });
  }

  test('basic match pattern', () => {
    function SimpleApp(props: { path: string }) {
      return (
        <Setup path={props.path}>
          <Router fallback={'fallback'}>
            <Route path="/" exact>
              home
            </Route>
            <Route path="/about">about</Route>
          </Router>
        </Setup>
      );
    }

    render(SimpleApp, {
      path: '/',
    });
    expect(container).not.toBeFalsy();
    expect(container.innerHTML).toBe('home');
    disposer();

    render(SimpleApp, {
      path: '/about',
    });
    expect(container.innerHTML).toBe('about');
    disposer();

    render(SimpleApp, {
      path: '/404',
    });
    expect(container.innerHTML).toBe('fallback');
    disposer();
  });

  test('params match pattern', () => {
    function SimpleApp(props: { path: string }) {
      return (
        <Setup path={props.path}>
          <Router fallback={'fallback'}>
            <Route path="/" exact>
              home
            </Route>
            <Route path="/:cate" exact>
              match1
            </Route>
            <Route path="/:cate/:id" exact>
              match2
            </Route>
          </Router>
        </Setup>
      );
    }

    render(SimpleApp, {
      path: '/',
    });
    expect(container).not.toBeFalsy();
    expect(container.innerHTML).toBe('home');
    disposer();

    render(SimpleApp, {
      path: '/cars',
    });
    expect(container.innerHTML).toBe('match1');
    disposer();

    render(SimpleApp, {
      path: '/cars/1',
    });
    expect(container.innerHTML).toBe('match2');
    disposer();

    render(SimpleApp, {
      path: '/cars/1/2',
    });
    expect(container.innerHTML).toBe('fallback');
    disposer();
  });
});
