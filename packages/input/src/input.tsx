/* istanbul ignore file */
import React, { useEffect, useMemo, useState } from 'react';
import styled, { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';
import Dropdown, { OptionType } from '@im-ui/styled-dropdown';

type ValueType = string | number;

const phonePrefix = '+49';
// eslint-disable-next-line
// eslint-disable-next-line
const patternDE = '^\\d{7,15}$';

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
  onCountryCodeChange?: (value: ValueType) => void;
  onBlur?: (value: ValueType) => void;
  onReset?: (value: ValueType) => void;
  enterDown?: (e: React.KeyboardEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  required?: boolean;
  resetValue?: ValueType;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
};

type StyledInputType = {
  value: string | number;
  error?: boolean;
  isPhone?: boolean;
};

export const StyledInput = styled.div<StyledInputType>`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: ${({ isPhone }) =>
    !isPhone ? `${theme.input.border.width}px solid ${theme.input.border.color}` : 'none'};
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
    padding: ${({ isPhone }) => (isPhone ? '.25rem 0' : '.25rem 1rem')};
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

export const InputElements = styled.input<{ type: string }>`
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  height: inherit;
  width: 100%;
  padding: 0;
  ${({ type }) =>
      type === 'tel' &&
      `
    z-index: 1;
    flex: none;
    margin-left: 5rem;
    width: calc(100% - 8rem);
    padding-left: .5rem;
    
    &+svg {
      z-index: 1;
    }
    
    ${theme.mediaQueries.whenTablet} {
      margin-left: 5.5rem;
    }
  `}
    :focus {
    outline: none;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const StyledLabel = styled(Label)`
  ${(props: { error?: boolean }) => props.error && `color: ${theme.color.flamePea};`}
`;

const ErrorMessage = styled.span`
  color: ${theme.color.flamePea};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 1;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: 2rem;
`;

const phoneCodes: OptionType[] = [
  {
    label: 'Deutschland, +49',
    value: '+49'
  },
  {
    label: 'Österreich, +43',
    value: '+43'
  }
];

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
  className
}) => {
  const isPhone = useMemo(() => type === 'tel', [type]);
  const formattedValue = useMemo(
    () => (isPhone ? (value as string).replace(/^(\+\d{2})/g, '') : value),
    [isPhone, value]
  );

  const [phoneCode, setPhoneCode] = useState<OptionType>(phoneCodes[0]);
  const [inputValue, setInputValue] = useState<string | number>(formattedValue);

  useEffect(() => {
    const value = isPhone ? `${phoneCode.value}${inputValue}` : inputValue;
    onChange?.(value);
    onCountryCodeChange?.(phoneCode.value);
  }, [isPhone, phoneCode, inputValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
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
      {label && (
        <StyledLabel error={!!errorMessage} required={required} text={label} htmlFor={id} />
      )}
      <StyledInput value={value} error={!!errorMessage} isPhone={isPhone}>
        {isPhone && (
          <Dropdown
            options={phoneCodes}
            onChange={handleCodeChange}
            defaultItem={phoneCode}
            selectStyles={selectStyles}
            isActive={isPhone && !!inputValue}
          />
        )}
        <InputElements
          {...inputProps}
          id={id}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          onBlur={handleOnBlur}
          onFocus={handleFocus}
          type={type}
          value={formattedValue}
          maxLength={maxLength}
          minLength={minLength}
          pattern={patternDE}
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputComponentWrapper>
  );
};

export default Input;
