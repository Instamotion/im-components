/* istanbul ignore file */
import React from 'react';
import styled from 'styled-components';
import Label from '@instamotion/label';
import ErrorMessage from '@instamotion/error-message';
import theme from '@instamotion/theme';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: JSX.Element | string;
  errorMessage?: JSX.Element;
  width?: string;
};

export const StyledInput = styled.input`
  border-radius: 4px;
  border: ${theme.input.border.width}px solid ${theme.input.border.color};
  font-family: ${theme.font.sans.family};
  font-size: ${theme.input.font.size}px;
  padding: 1rem 0.5rem;
  color: ${theme.color.oil};
  width: 100%;
  box-sizing: border-box;
  margin: 0;

  :focus {
    outline: none;
  }

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
`;

export const InputComponent = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Input: React.FC<InputProps> = props => {
  const { label, required, onChange, width, id, errorMessage } = props;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      e.persist();
      onChange(e);
    }
  };

  return (
    <InputComponent style={{ width }}>
      {label && (
        <Label required={required} htmlFor={id}>
          {label}
        </Label>
      )}
      <StyledInput {...props} id={id} onChange={handleOnChange} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputComponent>
  );
};

export default Input;
