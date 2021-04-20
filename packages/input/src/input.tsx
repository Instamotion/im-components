/* istanbul ignore file */
import React from 'react';
import {
  InputComponentWrapper,
  StyledLabel,
  StyledInput,
  InputElements,
  IconWrapper,
  StyledIcon,
  ErrorMessage
} from './styles';

export type ValueType = string | number;

export type InputProps = {
  isFloatLabel?: boolean;
  label?: string | JSX.Element;
  errorMessage?: JSX.Element;
  value?: ValueType;
  id?: string;
  width?: string | number;
  type?: string;
  placeholder?: string | JSX.Element;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  onChange?: (value: ValueType) => void;
  onCountryCodeChange?: (value: ValueType) => void;
  onBlur?: (value: ValueType) => void;
  onReset?: (value: ValueType) => void;
  enterDown?: (e: React.KeyboardEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  required?: boolean;
  resetValue?: ValueType;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  isAbsoluteError?: boolean;
};

export const Input: React.FC<InputProps> = ({
  isFloatLabel = false,
  label,
  errorMessage,
  width,
  value = '',
  id,
  type = 'text',
  maxLength = 30,
  minLength,
  onChange,
  onBlur,
  enterDown,
  onFocus,
  onReset,
  resetValue,
  required,
  disabled,
  inputProps = {},
  className,
  isAbsoluteError = false
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = resetValue || '';
    onReset?.(val);
    onChange?.(e.target.value);
  };

  const handleReset = () => {
    onChange?.('');
  };

  const handleOnBlur = (): void => {
    onBlur?.(value);
  };

  const handleFocus = (e: React.FocusEvent) => {
    onFocus?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      enterDown?.(e);
    }
  };
  console.log(inputProps);
  return (
    <InputComponentWrapper style={{ width }} className={className}>
      <StyledInput
        disabled={disabled}
        isFloatLabel={isFloatLabel}
        value={value}
        error={!!errorMessage}
        isPhone={false}
      >
        <InputElements
          {...inputProps}
          id={id}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          onFocus={handleFocus}
          type={type}
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
        />

        <IconWrapper>
          {value && (
            <StyledIcon
              icon="times"
              color="brightGrey"
              className="times-icon"
              onClick={handleReset}
            />
          )}
        </IconWrapper>
      </StyledInput>
      {label && (
        <StyledLabel
          haveValue={!!value}
          isFloatLabel={isFloatLabel}
          error={!!errorMessage}
          required={required}
          text={label}
          htmlFor={id}
        />
      )}
      {errorMessage && (
        <ErrorMessage isAbsoluteError={isAbsoluteError}>{errorMessage}</ErrorMessage>
      )}
    </InputComponentWrapper>
  );
};
