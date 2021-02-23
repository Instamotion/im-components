import React from 'react';
import Label from '@im-ui/label';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import { DropdownContainer, StyledDropdownWrapper, ErrorMessage } from './newStyles';

export type DropdownCombinerProps = {
  label?: JSX.Element | string;
  errorMessage?: JSX.Element;
  required?: boolean;
  withBorder?: boolean;
  children: JSX.Element | JSX.Element[] | string;
};

const CombinerBody = styled.div<{ withBorder: boolean; error: boolean; isTwoEl: boolean }>`
  display: flex;
  width: 100%;
  position: relative;

  ${StyledDropdownWrapper} {
    position: unset;
  }

  ${DropdownContainer} {
    position: unset;
    border: none;
    border-radius: 0;

    ${props => {
      return props.withBorder && `border: 1px solid ${theme.input.border.color};`;
    }}
    ${props => {
      return props.error && `border: 1px solid ${theme.color.signal};`;
    }}
  }

  > div:first-child ${DropdownContainer} {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    ${props => {
      return props.isTwoEl
        ? `border-right: 1px solid ${theme.input.border.color};`
        : 'border-right: none;';
    }}
    ${props => {
      return props.error && `border: 1px solid ${theme.color.signal};`;
    }}
  }

  &:focus-within ${DropdownContainer} {
    border-color: ${theme.color.secondary} !important;
  }

  > div:last-child ${DropdownContainer} {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-left: none;
  }
`;

export const DropdownCombiner: React.FC<DropdownCombinerProps> = ({
  label,
  errorMessage,
  required,
  children,
  withBorder = true
}) => {
  const isTwoElExist = (children && Array.isArray(children) && children.length === 2) as boolean;
  return (
    <div>
      {label && <Label error={!!errorMessage} text={label} required={required} />}
      <CombinerBody error={!!errorMessage} withBorder={!!withBorder} isTwoEl={isTwoElExist}>
        {children}
      </CombinerBody>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
