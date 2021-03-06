/* istanbul ignore file */
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import Dropdown, { OptionType } from '@im-ui/styled-dropdown';
import { InputProps } from '.';
import {
  InputComponentWrapper,
  StyledLabel,
  StyledInput,
  InputElements,
  IconWrapper,
  StyledIcon,
  ErrorMessage
} from './styles';

const phoneCodes: OptionType[] = [
  {
    label: 'Deutschland, +49',
    value: '+49'
  },
  {
    label: 'Österreich, +43',
    value: '+43'
  },
  {
    label: 'Schweiz, +41',
    value: '+41'
  }
];

const buildCodesString = (): string => `(${phoneCodes.map(el => `\\${el.value}`).join('|')})`;
// eslint-disable-next-line
export const phoneRegex = new RegExp(`^${buildCodesString()}\\d{7,15}$`);

export const checkPhoneValidation = (phone: string): boolean => {
  return phoneRegex.test(phone);
};

const selectStyles: FlattenSimpleInterpolation = css`
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;

  input {
    width: 3rem;

    & + div {
      margin: 0;
    }
  }
`;

export const Input: React.FC<InputProps> = ({
  isFloatLabel,
  label,
  errorMessage,
  width,
  value = '',
  id,
  type = 'text',
  maxLength = 30,
  minLength,
  onChange,
  onCountryCodeChange,
  onBlur,
  onReset,
  enterDown,
  onFocus,
  required,
  resetValue,
  inputProps = {},
  className,
  isAbsoluteError = false
}) => {
  const isPhone = useMemo(() => type === 'tel', [type]);
  const formattedValue = useMemo(() => (value as string).replace(/^(\+\d{2})/g, ''), [value]);

  const [phoneCode, setPhoneCode] = useState<OptionType>(phoneCodes[0]);
  const [inputValue, setInputValue] = useState<string | number>(formattedValue);
  const [caretPosition, setCaretPosition] = useState<null | number>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeZeroFromPhoneStart = (str: string): string => {
    return str && str.startsWith('0') ? str.substring(1) : str;
  };

  useEffect(() => {
    if (caretPosition) {
      inputRef.current?.setSelectionRange(caretPosition, caretPosition);
      setCaretPosition(null);
    }
  }, [formattedValue]);

  useEffect(() => {
    const value = phoneCode.value + removeZeroFromPhoneStart(inputValue as string);
    onChange?.(value);
    onCountryCodeChange?.(phoneCode.value);
  }, [isPhone, phoneCode, inputValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCaretPosition(e.target.selectionStart);
    setInputValue(e.target.value as string);
  };

  const handleOnBlur = (): void => {
    onBlur?.(value);
  };

  const handleReset = (): void => {
    const val = resetValue || '';
    onReset?.(val);
    setPhoneCode(phoneCodes[0]);
    setInputValue('');
  };

  const handleFocus = (e: React.FocusEvent) => {
    onFocus?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      enterDown?.(e);
    }
  };

  const handleCodeChange = (code: OptionType): void => {
    setPhoneCode(code);
  };

  return (
    <InputComponentWrapper style={{ width }} className={className}>
      <StyledInput value={inputValue} error={!!errorMessage} isPhone>
        <Dropdown
          options={phoneCodes}
          onChange={handleCodeChange}
          defaultItem={phoneCode}
          selectStyles={selectStyles}
          isActive={isPhone && !!inputValue}
          hasError={!!errorMessage}
          className="phone-dropdown"
          isFloatLabel
        />
        <InputElements
          {...inputProps}
          id={id}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          onFocus={handleFocus}
          type={type}
          value={inputValue}
          maxLength={maxLength}
          minLength={minLength}
          ref={inputRef}
        />

        <IconWrapper>
          {inputValue && (
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
          className=""
          haveValue={!!inputValue}
          isFloatLabel={isFloatLabel}
          error={!!errorMessage}
          required={required}
          text={label}
          htmlFor={id}
        />
      )}
      {errorMessage && (
        <ErrorMessage isFloatLabel={isFloatLabel} isAbsoluteError={isAbsoluteError}>
          {errorMessage}
        </ErrorMessage>
      )}
    </InputComponentWrapper>
  );
};

export default Input;
