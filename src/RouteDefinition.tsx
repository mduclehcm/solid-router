import {
  ParseOptions,
  TokensToRegexpOptions,
  RegexpToFunctionOptions,
} from 'path-to-regexp';

export interface RouteDefinition {
  path?: string;
  options: ParseOptions & TokensToRegexpOptions & RegexpToFunctionOptions;
  children: Function;
}
