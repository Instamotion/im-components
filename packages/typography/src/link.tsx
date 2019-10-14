import * as React from 'react';

import styled from 'styled-components';

export interface LinkProps {
  className?: string;
  children?: JSX.Element | string;
  href: string;
}

export const LinkComponent: React.FC<LinkProps> = ({ href, className, children }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const Link = styled(LinkComponent)`
  font-size: 16px;
`;

export default Link;
