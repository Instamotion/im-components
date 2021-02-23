import React from 'react';
import Label from '@im-ui/label';
import {
  CheckboxControl,
  CheckboxInput,
  CheckboxWrapper,
  Checkmark,
  ErrorMessage
} from './newStyles';

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
        <Checkmark error={!!errorMessage} htmlFor={id} />
        {label && <Label text={label} disabled={disabled} htmlFor={id} placement={'inline'} />}
      </CheckboxWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </CheckboxControl>
  );
};

export default Checkbox;
