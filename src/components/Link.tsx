import useHistory from '../hooks/useHistory';

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: any;
};

export default function Link({ children, ...props }: LinkProps) {
  const history = useHistory();
  function handleClick(
    e: MouseEvent & {
      currentTarget: HTMLAnchorElement;
      target: HTMLAnchorElement;
    },
  ) {
    e.preventDefault();
    history.push(props.href);
  }
  return (
    // @ts-ignore
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
