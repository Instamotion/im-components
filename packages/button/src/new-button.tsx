import { IMTheme as theme } from '@im-ui/theme';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

const AvailableButtonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  grayscale: 'grayscale',
  grayscaleDark: 'grayscaleDark',
  outlined: 'outlined'
};

const AvailableFontSizes = {
  lg: 'lg',
  normal: 'normal',
  sm: 'sm'
};

export type ButtonTypes = keyof typeof AvailableButtonTypes;
export type FontSizes = keyof typeof AvailableFontSizes;

type ButtonProps = {
  buttonType: ButtonTypes;
  disabled?: boolean;
  width?: number;
  size?: FontSizes;
};

const renderBaseButton = (
  buttonType: ButtonTypes,
  width?: number,
  size?: FontSizes
): FlattenSimpleInterpolation => {
  return css`
    cursor: pointer;
    border-radius: 0.375rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    width: ${width}rem;
    padding: ${theme.button[buttonType].padding};
    background-color: ${theme.button[buttonType].background};
    color: ${theme.button[buttonType].color};
    border: ${`${theme.button[buttonType].border.width}rem solid ${theme.button[buttonType].border.color}`};
    font-family: ${theme.font.sans.family};
    font-size: ${size ? theme.fontSize[size] : theme.button[buttonType].font.size}rem;
    letter-spacing: ${`${theme.button[buttonType].font.spacing}rem`};
    font-weight: ${theme.button[buttonType].font.weight};
    &:disabled {
      opacity: 0.5;
      box-shadow: none;
      cursor: no-drop;
    }
  `;
};

const renderDisabledButton = (
  buttonType: ButtonTypes,
  disabled?: boolean
): FlattenSimpleInterpolation | undefined => {
  return (disabled &&
    css`
      opacity: ${theme.button[buttonType].disabled.opacity};
    `) as FlattenSimpleInterpolation;
};

export const Button = styled.button<ButtonProps>`
  ${props => renderBaseButton(props.buttonType || 'primary', props?.width, props?.size)}
  ${props => renderDisabledButton(props.buttonType || 'primary', props.disabled)}
`;
