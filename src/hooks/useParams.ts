import { useContext } from 'solid-js';

import { RouterContext } from '../context/RouterContext';

export default function useParams() {
  return useContext(RouterContext).params;
}
