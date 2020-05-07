import { useContext } from 'solid-js';

import { HistoryContext } from '../components/ContextProvider';

export default function useLocationSignal() {
  const { locationSignal } = useContext(HistoryContext);
  return locationSignal;
}
