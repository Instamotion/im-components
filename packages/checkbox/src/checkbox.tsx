import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '@im-ui/error-message';
import theme from '@im-ui/theme';
import { css } from '@im-ui/utils';
import Label from '@im-ui/label';

const { px2rem } = css;

export type ClickChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.MouseEvent<HTMLLabelElement>;

export interface CheckboxProps {
  className?: string;
  id: string;
  label?: JSX.Element | string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: JSX.Element | string;
  onChange?: (checked: boolean, e: ClickChangeEvent) => void;
}

export const Checkmark = styled.label`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  margin-left: -${px2rem(20)};
  width: ${px2rem(24)};
  height: ${px2rem(24)};
  margin-right: ${px2rem(3)};
  border: ${px2rem(0.5)} solid ${theme.color.silver};
  border-radius: ${px2rem(4)}
  background-color: ${theme.color.white};

  ::after {
    content: '';
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -63%, 0) rotate(45deg);
    width: ${px2rem(5)};
    height: ${px2rem(15)};
    border: solid #000;
    border-width: 0 3px 3px 0;
  }
`;

export const CheckboxWrapper = styled.div`
  padding-left: ${px2rem(20)};
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
  label,
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
      <CheckboxWrapper>
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
        {label && <Label text={label} disabled={disabled} htmlFor={id} placement={'inline'} />}
      </CheckboxWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </CheckboxControl>
  );
};

export default Checkbox;
