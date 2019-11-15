import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';

export interface LinkProps {
  className?: string;
  href: string;
  target?: string;
}

export const LinkComponent: React.FC<LinkProps> = ({ href, target, className, children }) => (
  <a className={className} target={target} href={href}>
    {children}
  </a>
);

export const Link = styled(LinkComponent)`
  font-size: 1rem;
  color: ${theme.color.brightGrey};
  :hover {
    color: ${theme.color.downy};
  }
`;
