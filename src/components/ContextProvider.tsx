import { createContext, createSignal, onCleanup } from 'solid-js';
import { History } from 'history';

export const HistoryContext = createContext<{
  history: History;
  locationSignal: () => History['location'];
}>();

interface ContextProviderProps {
  history: History;
  children?: any;
}

export default function ContextProvider(props: ContextProviderProps) {
  const history = props.history;

  const [locationSignal, setLocationSignal] = createSignal(history.location);

  const locationHandler = history.listen((location) => {
    setLocationSignal(location);
  });

  onCleanup(() => {
    locationHandler();
  });

  return (
    <HistoryContext.Provider value={{ history, locationSignal }}>
      {props.children}
    </HistoryContext.Provider>
  );
}
