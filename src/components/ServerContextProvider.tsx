import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history';
import ContextProvider from './ContextProvider';

interface ServerContextProviderProps {
  options: MemoryHistoryBuildOptions;
  children?: any;
}

export default function ServerContextProvider(
  props: ServerContextProviderProps,
) {
  return (
    <ContextProvider history={createMemoryHistory(props.options)}>
      {props.children}
    </ContextProvider>
  );
}
