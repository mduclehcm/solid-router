import { createContext } from 'solid-js';
import { History } from 'history';

export const HistoryContext = createContext<History>();

interface ContextProviderProps {
  history: History;
  children: Function;
}
export default function ContextProvider(props: ContextProviderProps) {
  return (
    <HistoryContext.Provider value={props.history} children={props.children} />
  );
}
