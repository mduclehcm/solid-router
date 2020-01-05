import {
  ParseOptions,
  TokensToRegexpOptions,
  RegexpToFunctionOptions,
} from 'path-to-regexp';
interface RouteDefaultProps {
  path: string;
}
interface RouteProps extends Partial<RouteDefaultProps> {
  options: ParseOptions & TokensToRegexpOptions & RegexpToFunctionOptions;
  children: Function;
}

const defaultProps: RouteDefaultProps = {
  path: '',
};

function Route(_props: RouteProps) {
  const props = { ...defaultProps, ..._props };

  return props;
}

export default Route;
