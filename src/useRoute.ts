import { useContext } from 'solid-js';
import { RouteContext } from './RouteContext';

export default function useRoute() {
  return useContext(RouteContext);
}
