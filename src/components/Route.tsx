import { RouteDefinition } from '../interfaces/RouteDefinition';

export type RouteProps = RouteDefinition;

const Route = (props: RouteDefinition) => {
  // @ts-ignore
  return props as JSX.Element;
};

export default Route;
