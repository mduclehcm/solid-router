import useHistory from '../hooks/useHistory';

interface LinkProps {
  href: string;
  children?: any;
}

export default function Link(props: LinkProps) {
  const history = useHistory();
  function handleClick(e: any) {
    e.preventDefault();
    history.push(props.href);
  }
  return <a {...props} onClick={handleClick} />;
}
