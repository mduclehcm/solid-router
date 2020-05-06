import { useContext, createSignal, onCleanup } from 'solid-js';
import { HistoryContext } from '../components/ContextProvider';

export default function useLocationSignal() {
  const history = useContext(HistoryContext);
  const [location, setLocation] = createSignal(history.location);
  const locationHandler = history.listen((location) => {
    setLocation(location);
  });
  onCleanup(() => locationHandler());

  return location;
}
