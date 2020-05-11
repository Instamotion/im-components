import React from 'react';
import styled, { css } from 'styled-components';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';

export type ClickChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLLabelElement>;

export interface ToggleProps {
  id: string;
  name?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: JSX.Element | string;
  fullWidth?: boolean;
  onChange?: (checked: boolean, e: ClickChangeEvent) => void;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  checked = false,
  disabled = false,
  onChange,
  className,
  label,
  fullWidth = false,
  value
}) => {
  return (
    <ToggleControl fullWidth={fullWidth} id={id} className={className}>
      {label && <WrapperLabel htmlFor={id} text={label} disabled={disabled} />}
      <ToggleInput
        type="checkbox"
        id={id}
        name={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e: ClickChangeEvent): void => {
          if (onChange && !disabled) {
            onChange(!checked, e);
          }
        }}
      />
    </ToggleControl>
  );
};

export const ToggleControl = styled.span<ToggleProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.fullWidth &&
    css`
      justify-content: space-between;
    `}
`;

export const WrapperLabel = styled(Label)`
  margin-bottom: 0;
  padding-right: 1rem;
`;

export const ToggleInput = styled.input`
  position: relative;
  appearance: none;
  outline: none;
  width: 2.5rem;
  height: 1.25rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.silver};
  border-radius: 0.625rem;
  cursor: pointer;
  margin: 0;
  transition-duration: 0.2s;
  ${props =>
      props.disabled &&
      css`
        opacity: 0.5;
      `}
    ::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.color.silver};
    border-radius: 50%;
    transition-duration: 0.2s;
  }

  &:checked {
    background-color: ${theme.color.downy};
    border-color: ${theme.color.downy};
  }

  &:checked::after {
    left: 1.25rem;
    background-color: ${theme.color.white};
  }
`;

export default Toggle;
