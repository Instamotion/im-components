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

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioButtonLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 2rem;
`;

export const RadioButtonDecorator = styled.span`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${theme.color.alabaster};
  border: 1px solid #c6c6c6;
  border-radius: 50%;
  left: 0;
`;

export const RadioButtonInput = styled.input`
  position: absolute;
  display: none;
  &:checked + ${RadioButtonDecorator}:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${theme.color.secondary};
    background-image: url('https://cdn.instamotion.com/images/check-orange.svg');
  }
`;

const Label = styled.span`
  color: ${theme.color.typo};
  font-family: ${theme.font.bentonBold.family};
  font-weight: ${theme.font.bentonBold.weight};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, value, name, checked, onChange }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <RadioButtonContainer>
      <Label>{label}</Label>
      <RadioButtonLabel htmlFor={id}>
        <RadioButtonInput
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={handleOnChange}
        />
        <RadioButtonDecorator aria-hidden="true" />
      </RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;
