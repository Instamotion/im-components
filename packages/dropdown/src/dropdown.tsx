import React from 'react';
import Label from '@im-ui/label';
import ErrorMessage from '@im-ui/error-message';
import { FormattedMessage } from 'react-intl';
import { AngleIcon, DropdownContainer, DropdownSelect, DropdownComponent } from './dropdownStyles';

export type DropdownValue = number | string;

export interface DropdownOptionProps {
  value: DropdownValue;
  label: string;
  defaultMessage?: string;
}

export type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id?: string;
  options: DropdownOptionProps[];
  label?: string;
  disabled?: boolean;
  selected?: string;
  value?: DropdownValue;
  width?: string;
  errorMessage?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export interface InputValidationResult {
  valid: boolean;
  message?: React.ReactElement;
}

export const Dropdown: React.FC<DropdownProps> = ({
  id,
  className,
  onChange,
  disabled = false,
  options,
  required,
  selected,
  width,
  label,
  errorMessage,
  value
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (onChange && !disabled) {
      e.persist();
      onChange(e);
    }
  };

  return (
    <DropdownComponent style={{ width }}>
      {label && <Label messageId={label} />}
      <DropdownContainer>
        <DropdownSelect
          id={id}
          aria-label={id}
          className={className}
          disabled={disabled}
          defaultValue={selected}
          onChange={handleOnChange}
          required={required}
          value={value}
        >
          {options &&
            options.map(option => (
              <FormattedMessage
                id={option.label}
                key={option.value}
                defaultMessage={option.defaultMessage}
              >
                {txt => (
                  <option key={option.value} value={option.value}>
                    {txt}
                  </option>
                )}
              </FormattedMessage>
            ))}
        </DropdownSelect>
        <AngleIcon />
      </DropdownContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </DropdownComponent>
  );
};

export default Dropdown;
