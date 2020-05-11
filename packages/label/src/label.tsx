import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';

export type Placement = 'stack' | 'inline';

export interface LabelProps {
  text: JSX.Element | string;
  required?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  className?: string;
  placement?: Placement;
}

const LabelComponent = styled.label<LabelProps>`
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  ${({ placement = 'stack' }) =>
    css`
      margin-bottom: ${placement === 'stack' ? '0.5rem' : '0'};
    `}
  ${({ disabled }) => css`
    color: ${disabled ? theme.color.silver : theme.color.brightGrey};
  `}
`;

const Asterisk = styled.span<{ disabled: boolean | undefined }>`
  padding-left: 0.2rem;
  color: ${({ disabled }) => (disabled ? theme.color.silver : theme.color.flamePea)};
`;

const Label: React.FC<LabelProps> = props => (
  <LabelComponent {...props}>
    <span>{props.text}</span>
    {props.required && <Asterisk disabled={props.disabled}>*</Asterisk>}
  </LabelComponent>
);

export default Label;
