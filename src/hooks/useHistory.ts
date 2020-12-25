import { useContext } from 'solid-js';
import { HistoryContext } from '../context/HistoryContex';

export default function useHistory() {
  const { history } = useContext(HistoryContext);
  return history;
}
