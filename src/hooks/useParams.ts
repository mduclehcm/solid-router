import { useContext } from 'solid-js';

import { RouteContext } from '../RouteContext';

export default function useParams() {
  return useContext(RouteContext);
}
