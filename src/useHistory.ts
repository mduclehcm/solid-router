import { useContext } from 'solid-js';
import { HistoryContext } from './ContextProvider';

export default function useHistory() {
  return useContext(HistoryContext);
}
