import { RouteOptions } from './types';

export interface RouteDefinition {
  path?: string;
  options?: RouteOptions;
  children?: Function;
}
