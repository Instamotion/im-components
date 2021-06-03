import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
export interface RadioButtonProps {
  className?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  label: JSX.Element | string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RadioButtonWrapp = styled.div`
  position: relative;
  width: 1.375rem;
  height: 1.375rem;
  padding-right: 0.625rem;
`;

export const RadioButtonDecorator = styled.span`
  position: absolute;
  width: 1.375rem;
  height: 1.375rem;
  background-color: #fff;
  border: 1px solid ${theme.color.oil};
  border-radius: 50%;
  left: 0;
  top: 0;
`;

export const RadioButtonInput = styled.input`
  position: absolute;
  display: none;
  &:checked + ${RadioButtonWrapp} ${RadioButtonDecorator}:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${theme.color.secondary};
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  value,
  name,
  checked,
  onChange
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <RadioButtonLabel htmlFor={id}>
      <RadioButtonInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleOnChange}
      />
      <RadioButtonWrapp>
        <RadioButtonDecorator aria-hidden="true" />
      </RadioButtonWrapp>
      <span>{label}</span>
    </RadioButtonLabel>
  );
};

export default RadioButton;
