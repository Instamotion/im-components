import styled, { css } from 'styled-components';
import React from 'react';
import theme from '@im-ui/theme';

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
  ${props => {
    const buttonType: ButtonTypes = props.buttonType || 'primary';
    return css`
      background-color: ${theme.button[buttonType].background};
      color: ${theme.button[buttonType].color};
    `;
  }}
  border-width: ${props => (props.buttonType === 'primary' ? 0 : 0.0625)}rem;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: ${theme.color.downy};
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  font-family: ${theme.font.sans.family};
  text-transform: uppercase;
  text-align: center;
  transition: all 0.2s linear;
  height: 2.5rem;
  ${props =>
    props.sizing === 'full-width' &&
    css`
      width: 100%;
    `}
  letter-spacing: 0.025rem;
  &:hover {
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0 ,0, 0.1);
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
