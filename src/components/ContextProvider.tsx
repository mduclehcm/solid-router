import { createSignal, onCleanup } from 'solid-js';
import { History } from 'history';
import { HistoryContext, HistoryContextObj } from '../context/HistoryContex';
interface ContextProviderProps {
  history: History;
  children?: any;
}

export default function ContextProvider(props: ContextProviderProps) {
  const history = props.history;
  const [location, setLocation] = createSignal(history.location);
  const unregisterCallback = history.listen((location) => {
    setLocation(location);
  });

  onCleanup(() => {
    unregisterCallback();
  });

  const value: HistoryContextObj = {
    history,
    get path() {
      return location().pathname;
    },
    get search() {
      return location().search;
    },
    get state() {
      return location().state;
    },
    get location() {
      return location();
    },
  };

  return (
    <HistoryContext.Provider value={value}>
      {props.children}
    </HistoryContext.Provider>
  );
}
