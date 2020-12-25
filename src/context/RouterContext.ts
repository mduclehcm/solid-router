import { createContext } from 'solid-js';

export type RouterContextObj = {
  params: () => { [key: string]: any };
};

export const RouterContext = createContext<RouterContextObj>(null);
