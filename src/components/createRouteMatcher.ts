import { match } from 'path-to-regexp';
import { RouteDefinition } from '../interfaces/RouteDefinition';

export default function createRouteMatcher<P extends object = object>(
  route: RouteDefinition,
) {
  return (pathname: string, setParams) => {
    let routePath = route.path;
    if (route.exact !== true) {
      routePath = `${routePath}/(.*)*`;
    }
    const matcher = match<P>(routePath, route.options);
    return () => {
      const result = matcher(pathname);
      if (result) {
        setParams(result.params);
      }
      return result !== false;
    };
  };
}
