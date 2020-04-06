import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';

export interface RibbonProps {
  className?: string;
  text?: string;
  alignRight?: boolean;
}

const RibbonComponent: React.FC<RibbonProps> = ({ className, text, alignRight }) => (
  <StyledRibbon className={className} alignRight={alignRight}>
    {' '}
    {text}{' '}
  </StyledRibbon>
);

const StyledRibbon = styled.div<RibbonProps>`
  position: relative;
  left: -0.375rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 0.75rem 0 0.5rem;
  color: ${theme.color.oil};
  background-color: ${theme.color.parisDaisy};
  box-shadow: 0 4px 4px -4px ${theme.color.brightGrey};
  font-size: 0.875rem;
  font-weight: 500;
  padding: ${props => (props.alignRight ? '0 0.5em 0 1em' : '0 0.5em')};
  text-transform: ${props => (props.alignRight ? 'uppercase' : 'none')};
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.3125rem;
    border-style: solid;
    border-color: #807226 transparent transparent transparent;
    border-width: 0.3125rem 0 0 0.3125rem;
    ${props =>
      props.alignRight &&
      css`
        left: auto;
        right: 0;
        border-width: 0.3125rem 0.3125rem 0 0;
      `}
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    border-width: 1.5rem 0 0 0.5rem;
    border-color: #ffffff transparent transparent transparent;
    top: 0;
    right: 0;
    bottom: 0;
    ${props =>
      props.alignRight &&
      css`
        left: 0;
        right: auto;
        border-width: 1.5rem 0.5rem 0 0;
      `}
  }
`;

export default RibbonComponent;
