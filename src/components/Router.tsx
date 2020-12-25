import {
  Component,
  createMemo,
  untrack,
  useContext,
  createSignal,
} from 'solid-js';
import { RouteDefinition } from '../interfaces/RouteDefinition';
import getArrayOf from '../helpers/getArrayOf';
import useLocation from '../hooks/useLocation';
import { RouterContext } from '../context/RouterContext';

import createRouteMatcher from './createRouteMatcher';

export type RouterProps = {
  fallback?: JSX.Element;
  children: any;
};

export const Router = ((props: RouterProps) => {
  const useFallback = 'fallback' in props;
  const routes = getArrayOf<RouteDefinition>(props.children);

  const routeMatchers = routes.map(createRouteMatcher);
  const parentRouter = useContext(RouterContext);
  const [params, setParams] = createSignal({});
  const computeMatchedIndex = createMemo<number>(
    () => {
      let pathname;
      if (parentRouter) {
        pathname = '/' + (parentRouter.params()[0] || []).join('/');
      } else {
        const location = useLocation();
        if (location) {
          pathname = location.pathname;
        }
      }
      if (!pathname) {
        return -1;
      }
      for (let i = 0; i < routeMatchers.length; i++) {
        const matcher = routeMatchers[i](pathname, setParams);
        if (matcher()) {
          return i;
        }
      }
      return -1;
    },
    -1,
    (prev, next) => prev === next,
  );

  const computeMatchedRoute = createMemo(
    () => {
      const index = computeMatchedIndex();
      if (index < 0) {
        if (useFallback) return [-1, props.fallback];
        return [-1, null];
      }
      const children = routes[index].children;
      return [
        index,
        () =>
          typeof children === 'function'
            ? untrack(() => children())
            : (children as JSX.Element),
      ];
    },
    [],
    (prev, next) => prev[0] === next[0],
  );
  return (
    <RouterContext.Provider
      value={{
        params,
      }}
    >
      {computeMatchedRoute()[1]}
    </RouterContext.Provider>
  );
}) as Component<RouterProps>;
