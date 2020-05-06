import { useContext } from 'solid-js';
import { HistoryContext } from '../components/ContextProvider';

export default function useHistory() {
  return useContext(HistoryContext);
}
