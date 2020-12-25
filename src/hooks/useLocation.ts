import { useContext } from 'solid-js';
import { HistoryContext } from '../context/HistoryContex';

export default function useLocation() {
  const history = useContext(HistoryContext);
  return history && history.location;
}
