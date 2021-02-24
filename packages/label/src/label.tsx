import React from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';

export type Placement = 'stack' | 'inline';

export interface LabelProps {
  text: JSX.Element | string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  className?: string;
  placement?: Placement;
}

const LabelComponent = styled.label<LabelProps>`
  font-family: ${theme.font.bentonBold.family};
  font-weight: ${theme.font.bentonBold.weight};
  line-height: 1.625rem;
  color: ${theme.color.typo}
  font-size: 1rem;
  cursor: pointer;
  ${({ placement = 'stack' }) =>
    css`
      margin-bottom: ${placement === 'stack' ? '0.5rem' : '0'};
    `}
  ${({ disabled }) => css`
    color: ${disabled ? theme.color.silver : theme.color.typo};
  `}
  color: ${({ error }) => (error ? theme.color.signal : theme.color.typo)}
`;

const Asterisk = styled.span<{ disabled: boolean | undefined; error?: boolean }>`
  padding-left: 0.2rem;
  color: ${({ disabled }) => (disabled ? theme.color.silver : theme.color.typo)};
  color: ${({ error }) => (error ? theme.color.signal : theme.color.typo)};
`;

const Label: React.FC<LabelProps> = props => (
  <LabelComponent {...props}>
    <span>{props.text}</span>
    {props.required && (
      <Asterisk disabled={props.disabled} error={props.error}>
        *
      </Asterisk>
    )}
  </LabelComponent>
);

export default Label;
