import { RouteOptions } from '../types';

export interface RouteDefinition {
  path: string;
  children?: any;
  exact?: boolean;
  options?: RouteOptions;
}
