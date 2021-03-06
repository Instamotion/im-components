import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import RadioButton from '@im-ui/radio-button';

export interface RadioButtonCardProps {
  className?: string;
  checked?: boolean;
  label: JSX.Element | string;
  value: any;
  onChange: (value: any) => void;
}

const RadioButtonCardWrapper = styled.div<{ checked: boolean }>`
  background: ${theme.color.white};
  border: 2px solid ${({ checked }) => (checked ? theme.color.secondary : theme.input.border.color)};
  border-radius: 0.375rem;
  cursor: pointer;

  padding: 1.125rem 1rem 1.125rem 1rem;
  > label {
    margin-left: 0.3rem;
  }

  ${theme.mediaQueries.whenDesktop} {
    padding: 1.75rem 1.5rem 1.75rem 1.5rem;
  }
`;

const RadioButtonCard: React.FC<RadioButtonCardProps> = ({
  className,
  value,
  label,
  checked,
  onChange
}) => (
  <RadioButtonCardWrapper
    onClick={e => {
      e.stopPropagation();
      onChange(value);
    }}
    checked={!!checked}
  >
    <RadioButton key={value} label={label} value={value} checked={checked} />
  </RadioButtonCardWrapper>
);

export default RadioButtonCard;
