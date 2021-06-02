import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import RadioButton from '@im-ui/radio-button';

export interface RadioButtonCardProps {
  className?: string;
  checked?: boolean;
  label: JSX.Element | string;
  value: string;
  onChange: (value: string) => void;
}

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.color.white};
  border: 2px solid ${theme.color.secondary};
  border-radius: 0.375rem;
  padding: 1.5rem;
  cursor: pointer;

  > label {
    margin-left: 2.5rem;
  }
`;

const RadioButtonCard: React.FC<RadioButtonCardProps> = ({
  className,
  value,
  label,
  checked,
  onChange
}) => (
  <FlexColumnContainer
    onClick={e => {
      e.stopPropagation();
      onChange(value);
    }}
  >
    <RadioButton key={value} label={label} value={value} checked={checked} />
  </FlexColumnContainer>
);

export default RadioButtonCard;
