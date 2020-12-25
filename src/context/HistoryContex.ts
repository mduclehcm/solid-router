import { createContext } from 'solid-js';
import { History } from 'history';

export type HistoryContextObj = {
  history: History;
  path: string;
  search: string;
  state: any;
  location: History['location'];
};

export const HistoryContext = createContext<HistoryContextObj>();
