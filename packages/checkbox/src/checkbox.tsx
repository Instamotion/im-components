import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '@im-ui/error-message';
import theme from '@im-ui/theme';
import { css } from '@im-ui/utils';

const { px2rem } = css;

export type ClickChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLLabelElement>;

export interface CheckboxProps {
  className?: string;
  id: string;
  message?: JSX.Element | string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: JSX.Element;
  onChange?: (checked: boolean, e: ClickChangeEvent) => void;
}

export const Checkmark = styled.label`
  position: absolute;
  left: 0;
  top: -1px;
  box-sizing: border-box;
  width: ${px2rem(16)};
  height: ${px2rem(16)};
  border: ${px2rem(2)} solid ${theme.color.silver};
  background-color: ${theme.color.white};

  ::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -63%, 0) rotate(45deg);
    width: ${px2rem(9)};
    height: ${px2rem(13)};
    border: solid #000;
    border-width: 0 3px 3px 0;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  display: none;
`;

export const CheckboxControl = styled.span`
  display: inline-flex;
  position: relative;
  user-select: none;
  flex-direction: column;
  padding-left: ${px2rem(20)};

  & input:checked ~ ${Checkmark} {
    border-color: ${theme.color.oil};
  }

  & input:checked ~ ${Checkmark}::after {
    border-color: ${theme.color.downy};
  }

  & input:checked ~ ${Checkmark}:after {
    display: block;
  }
`;

export const Label = styled.label`
  font-size: 0.75rem;
  color: ${theme.color.brightGrey};
  font-weight: bold;
  display: flex;
  cursor: pointer;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  user-select: none;
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  disabled = false,
  onChange,
  className,
  message,
  required,
  value,
  errorMessage
}) => {
  const [state, setState] = React.useState(checked);
  const handleOnChange = (e: ClickChangeEvent): void => {
    if (onChange && !disabled) {
      setState(!state);
      onChange(!state, e);
    }
  };

  return (
    <CheckboxControl className={className}>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={id}
        onChange={handleOnChange}
        checked={state}
        value={value}
        required={required}
      />
      <Checkmark htmlFor={id} />
      {message && (
        <Label htmlFor={id}>
          {message} {required && '*'}
        </Label>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </CheckboxControl>
  );
};

export default Checkbox;
