import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '@im-ui/error-message';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';
import { px2rem } from '@im-ui/utils';

export type ClickChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLLabelElement>;

export interface CheckboxProps {
  className?: string;
  id: string;
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
  width: ${px2rem(16)};
  height: ${px2rem(16)};
  border: ${px2rem(2)} solid ${theme.color.silver};
  background-color: #fff;

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
  padding-left: 1rem;

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

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  disabled = false,
  onChange,
  className,
  children,
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
      <Label required={required} htmlFor={id}>
        {children}
      </Label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </CheckboxControl>
  );
};

export default Checkbox;
