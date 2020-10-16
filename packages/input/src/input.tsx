/* istanbul ignore file */
import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '@im-ui/label';
import ErrorMessage from '@im-ui/error-message';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';

type ValueType = string | number;

const phonePrefix = '+49';
// eslint-disable-next-line
const patternWithPrefixDE = '^(\\+49)\\d{7,15}$';
// eslint-disable-next-line
const patternWithoutPrefixDE = '^\\d{7,15}$';

export type InputProps = {
  label?: string | JSX.Element;
  errorMessage?: JSX.Element;
  value?: ValueType;
  id?: string;
  width?: string | number;
  type?: string;
  placeholder?: string | JSX.Element;
  maxLength?: number;
  minLength?: number;
  onChange?: (value: ValueType) => void;
  onBlur?: (value: ValueType) => void;
  onReset?: (value: ValueType) => void;
  enterDown?: (e: React.KeyboardEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  required?: boolean;
  resetValue?: ValueType;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const StyledInput = styled.div<{ value: string | number; error?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: ${theme.input.border.width}px solid ${theme.input.border.color};
  font-family: ${theme.font.sans.family};
  font-size: ${theme.input.font.size}px;
  padding: 1rem 0.5rem;
  color: ${theme.color.oil};
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  margin: 0;

  &[type='text'],
  &[type='password'],
  &[type='email'],
  &[type='tel'],
  &[type='url'],
  &[type='number'] {
    :focus {
      border-color: ${theme.color.downy};
    }
  }

  ${theme.mediaQueries.whenTablet} {
    padding: 1rem;
  }

  ${props =>
    props.value &&
    `
    border-color: ${theme.color.downy};
  `}

  ${(props: { error?: boolean }) =>
    props.error &&
    `
    border-color: ${theme.color.flamePea};
  `}
`;

export const InputComponentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputComponent = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const InputElements = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  height: inherit;
  padding: 0;

  :focus {
    outline: none;
  }
`;

export const Input: React.FC<InputProps> = ({
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
  onReset,
  enterDown,
  onFocus,
  required,
  resetValue,
  inputProps = {}
}) => {
  const [shouldShowPhonePrefix, setShouldShowPhonePrefix] = useState(false);
  const isPhone = type === 'tel';

  const updateValue = (val: ValueType): void => {
    if (onChange) {
      onChange(val);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateValue(e.target.value);
  };

  const handleOnBlur = (): void => {
    let newVal = value;
    if (isPhone) {
      changePhoneStatus(false);
      newVal = value && value !== phonePrefix ? phonePrefix + value : '';
      updateValue(newVal);
    }
    if (onBlur) {
      onBlur(newVal);
    }
  };

  const handleReset = (): void => {
    const val = resetValue || '';
    updateValue(val);
    changePhoneStatus(false);
    if (onReset) {
      onReset(val);
    }
  };

  const handleFocus = (e: React.FocusEvent) => {
    if (isPhone) {
      changePhoneStatus(true);
      updateValue((value as string).replace(phonePrefix, ''));
    }
    if (onFocus) {
      onFocus(e);
    }
  };

  const changePhoneStatus = (status: boolean) => {
    if (isPhone) {
      setShouldShowPhonePrefix(status);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (enterDown && e.key === 'Enter') {
      enterDown(e);
    }
  };

  return (
    <InputComponentWrapper style={{ width }}>
      {label && <Label required={required} text={label} htmlFor={id} />}
      <StyledInput value={value} error={!!errorMessage}>
        {shouldShowPhonePrefix && <span>{phonePrefix}</span>}
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
          pattern={shouldShowPhonePrefix ? patternWithoutPrefixDE : patternWithPrefixDE}
        />
        {value && (
          <Icon icon="times" color="brightGrey" className="times-icon" onClick={handleReset} />
        )}
      </StyledInput>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputComponentWrapper>
  );
};

export default Input;
