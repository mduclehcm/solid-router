import {
  createBrowserHistory,
  BrowserHistoryBuildOptions,
  History,
} from 'history';
import ContextProvider from './ContextProvider';

interface BrowserContextProviderProps {
  history?: History;
  options?: BrowserHistoryBuildOptions;
  children?: any;
}

export default function BrowserContextProvider(
  props: BrowserContextProviderProps,
) {
  return (
    <ContextProvider
      history={props.history || createBrowserHistory(props.options)}
    >
      {props.children}
    </ContextProvider>
  );
}
