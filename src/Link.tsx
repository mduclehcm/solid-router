import { useContext } from 'solid-js';
import { HistoryContext } from './ContextProvider';

interface LinkProps {
  href: string;
  children: any;
}

export default function Link(props: LinkProps) {
  const history = useContext(HistoryContext);
  function handleClick(e) {
    e.preventDefault();
    history.push(props.href);
  }
  return (
    <a {...props} onClick={handleClick}>
      {props.children}
    </a>
  );
}
