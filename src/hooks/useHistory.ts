import { useContext } from 'solid-js';
import { HistoryContext } from '../components/ContextProvider';

export default function useHistory() {
  const { history } = useContext(HistoryContext);
  return history;
}
