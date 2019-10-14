import React from 'react';
import styled from 'styled-components';
import theme from '@instamotion/theme';

export type TooltipProps = {
  icon: JSX.Element;
  className?: string;
};

const TooltipContent = styled.div`
  min-width: 12rem;
  max-width: 22rem;
  color: ${theme.color.oil};
  border: solid 1px ${theme.color.niagara};
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 100%;
  margin-left: 12px;
  display: none;
  background-color: ${theme.color.white};

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -11px;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 0;
    border-color: transparent ${theme.color.niagara} transparent transparent;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  :hover ${TooltipContent} {
    display: block;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({ className, icon, children }) => (
  <TooltipWrapper className={className}>
    {icon}
    <TooltipContent>{children}</TooltipContent>
  </TooltipWrapper>
);

export default Tooltip;
