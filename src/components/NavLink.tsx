import { createMemo, sample } from 'solid-js';

import useHistory from '../hooks/useHistory';
import useRouteMatchSignal from '../hooks/useRouteMatchSignal';
import { RouteOptions } from '../types';

interface NavLinkProps {
  href: string;
  className?: string;
  activeClass?: string;
  options?: RouteOptions;
  children?: any;
}

export default function NavLink({
  href,
  activeClass = '',
  className = '',
  children,
  options,
  ...props
}: NavLinkProps) {
  const history = useHistory();
  const routeMatchSignal = useRouteMatchSignal({
    path: href,
    options,
  });

  function handleClick(e: any) {
    e.preventDefault();
    history.push(href);
  }

  return createMemo(() => {
    const isMatched = !!routeMatchSignal();
    return sample(() => (
      <a
        className={isMatched ? `${className} ${activeClass}` : className}
        onClick={handleClick}
        href={href}
        {...props}
      >
        {children}
      </a>
    ));
  });
}
