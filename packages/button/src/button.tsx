import styled, { css } from 'styled-components';
import React from 'react';
import theme from './theme';

export const AvailableButtonTypes = {
  primary: 'primary',
  secondary: 'secondary'
};

export type ButtonTypes = keyof typeof AvailableButtonTypes;

export type ButtonSizing = 'full-width' | 'auto';

export type ButtonProps = React.ButtonHTMLAttributes<any> & {
  sizing?: ButtonSizing;
  buttonType?: ButtonTypes;
};

const Button = styled.button<ButtonProps>`
  ${({ buttonType = 'primary' }) => css`
      border-color: ${theme[buttonType].borderColor}
      background-color: ${theme[buttonType].background};
      color: ${theme[buttonType].color};
    `}
  ${({ sizing = 'auto' }) => css`
    display: ${sizing === 'auto' ? 'inline-block' : 'block'};
    width: ${sizing === 'auto' ? 'auto' : '100%'};
  `}
  align-items: center;
  border-width: ${props => (props.buttonType === 'primary' ? 0 : 0.0625)}rem;
  border-style: solid;
  border-radius: 0.25rem;
  box-sizing: border-box;
  height: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: red;
  padding: 0.25rem 1rem;
  text-transform: uppercase;
  text-align: center;
  transition: all 0.2s linear;
  height: 2.5rem;
  letter-spacing: 0.025rem;
  &:hover {
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.05);
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: no-drop;
  }
`;

export default Button;
