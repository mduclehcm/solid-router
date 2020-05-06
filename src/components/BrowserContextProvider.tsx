import { createBrowserHistory, BrowserHistoryBuildOptions } from 'history';
import ContextProvider from './ContextProvider';

interface BrowserContextProviderProps {
  options: BrowserHistoryBuildOptions;
  children?: any;
}

export default function BrowserContextProvider(
  props: BrowserContextProviderProps,
) {
  return (
    <ContextProvider history={createBrowserHistory(props.options)}>
      {props.children}
    </ContextProvider>
  );
}
