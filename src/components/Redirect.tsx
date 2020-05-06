import { createEffect } from 'solid-js';
import useHistory from '../hooks/useHistory';

interface RedirectProps {
  href: string;
  children?: any;
}

export default function Redirect(props: RedirectProps) {
  const history = useHistory();
  createEffect(() => {
    history.push(props.href);
  });
  return props.children;
}
