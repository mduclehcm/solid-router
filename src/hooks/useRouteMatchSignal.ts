import { match, Match } from 'path-to-regexp';

import { RouteDefinition } from '../RouteDefinition';

import useLocationSignal from './useLocationSignal';

type RouteMatchSignal = () => Match<Object>;

export default function useRouteMatchSignal(
  routeOrPath: RouteDefinition | string,
): RouteMatchSignal {
  const locationSignal = useLocationSignal();

  let route: RouteDefinition;
  if (typeof routeOrPath === 'string') {
    route = { path: routeOrPath, options: {} };
  } else {
    route = routeOrPath;
  }
  if (!route.path) {
    route.path = '*';
  }
  const matcher = match(route.path, route.options);
  return () => {
    const pathname = locationSignal().pathname;
    return matcher(pathname);
  };
}
