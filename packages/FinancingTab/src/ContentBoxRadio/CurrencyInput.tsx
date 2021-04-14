import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { IMTheme as theme } from '@im-ui/theme';
export interface CurrencyInputProps {
  value: number;
  sign: string;
  min?: number;
  max?: number;
  locale?: string;
  disabled?: boolean;
  invalid?: boolean;
  onCrossClick?: () => void;
  onChange?: (value: number) => void;
}

const CurrencyInputWrap = styled.div<{ invalid: boolean }>`
  position: relative;
  color: ${theme.color.brightGrey};
  border-radius: 6px;
  ${props =>
    props.invalid === true &&
    css`
      border: ${theme.input.border.width}px solid #ff0000;
    `}
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.3rem;
  margin-top: 0.5rem;
  margin: 0;
  box-sizing: border-box;
  border-radius: 0.375rem;
  border: ${theme.input.border.width}px solid #f3f3f3;
  background-color: #f3f3f3;
  font-family: ${theme.font.bentonRegular.family};
  font-size: 1rem;
  color: ${theme.color.typo};

  ${props =>
    props.disabled === true &&
    css`
      color: ${theme.color.grey};
    `}
`;

const CloseIcon = styled.div`
  z-index: 5;
  position: absolute;
  width: 2.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const CurrencyInput = (props: CurrencyInputProps) => {
  const {
    value,
    sign,
    onChange = () => {},
    onCrossClick,
    disabled,
    invalid,
    min,
    max,
    locale = 'de-DE'
  } = props;

  const [state, setState] = useState<string>(String(value));
  const [isFocused, setIsFocused] = useState(false);

  if ((min && min > value) || (max && max < value)) {
    console.warn(`[currency input]: min (${min}); max (${max}); value (${value})`);
    // return <div>Internal Error</div>
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value }
    } = e;
    if (value === '') {
      return setState('');
    }
    if (/^\d{0,}$/.test(value)) {
      return setState(value);
    }
  };

  const handleOnBlur = () => {
    setIsFocused(false);
    let intVal = state === '' ? 0 : parseInt(state, 10);
    if (max !== undefined && intVal > max) {
      setState(String(max));
      return onChange(max);
    }
    if (min !== undefined && intVal < min) {
      setState(String(min));
      return onChange(min);
    }
    onChange(intVal);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.which === 13) {
      setIsFocused(false);
      let intVal = state === '' ? 0 : parseInt(state, 10);
      onChange(intVal);
    }
  };

  const getFormattedValue = (val: string, sign: string) => {
    let intVal = val === '' ? 0 : parseInt(val, 10);
    return `${intVal.toLocaleString(locale)} ${sign}`;
  };

  return (
    <CurrencyInputWrap invalid={invalid ?? false}>
      <Input
        value={isFocused ? state : getFormattedValue(state, sign)}
        onFocus={() => setIsFocused(true)}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
        onBlur={handleOnBlur}
        disabled={disabled}
      />
      {!disabled && (
        <CloseIcon>
          <FontAwesomeIcon icon={faTimes} onClick={onCrossClick} />
        </CloseIcon>
      )}
    </CurrencyInputWrap>
  );
};

export default CurrencyInput;
