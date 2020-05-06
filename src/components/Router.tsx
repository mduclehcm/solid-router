import { createMemo, suspend, sample } from 'solid-js';

import getArrayOf from '../helpers/getArrayOf';
import { RouteContext } from '../RouteContext';
import { RouteDefinition } from '../RouteDefinition';
import useRouteMatchSignal from '../hooks/useRouteMatchSignal';

interface RouterProps {
  fallback: any;
  children?: RouteDefinition[];
}

export default function Router(props: RouterProps) {
  const routes = getArrayOf(props.children);
  const routeMatchSignals = routes.map(useRouteMatchSignal);
  const useFallback = 'fallback' in props;
  const evalConditions = createMemo(() =>
    routeMatchSignals.reduce(
      (result, matcher, index) => {
        if (result.index === -1) {
          const match = matcher();
          if (match) {
            return {
              index,
              params: match.params,
            };
          }
        }
        return result;
      },
      {
        index: -1,
        params: {},
      },
    ),
  );

  return suspend(
    createMemo(() => {
      const { index, params } = evalConditions();
      return sample(() => (
        <RouteContext.Provider value={params}>
          {index < 0 ? useFallback && props.fallback : routes[index].children}
        </RouteContext.Provider>
      ));
    }),
  );
}
