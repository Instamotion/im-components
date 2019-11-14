import React from 'react';
import styled from 'styled-components';
import theme from '@im-ui/theme';
import { css } from '@im-ui/utils';

const { px2rem } = css;

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
  position: relative;
  padding-left: 2rem;
`;

export const RadioButtonDecorator = styled.span`
  position: absolute;
  width: ${px2rem(16)};
  height: ${px2rem(16)};
  background-color: #fff;
  border: ${px2rem(2)} solid ${theme.color.silver};
  border-radius: 50%;
  left: 0;
  top: -1px;
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
    width: ${px2rem(10)};
    height: ${px2rem(10)};
    background-color: ${theme.button.primary.background};
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
      <RadioButtonDecorator aria-hidden="true" />
      {label}
    </RadioButtonLabel>
  );
};

export default RadioButton;
