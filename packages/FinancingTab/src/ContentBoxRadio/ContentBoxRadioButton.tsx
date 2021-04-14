import React from 'react';
import styled from 'styled-components';
import RadioButton from './RadioButton';

export interface ContentBoxRadioButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  checked?: boolean;
  label: JSX.Element | string;
  value: string;
  onChange?: (value: string) => void;
}

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBoxRadioButton: React.FC<ContentBoxRadioButtonProps> = ({
  children,
  label,
  value,
  checked,
  onChange = () => {}
}: ContentBoxRadioButtonProps) => (
  <FlexColumnContainer onClick={() => onChange(value)}>
    <RadioButton
      key={value}
      label={label}
      value={value}
      checked={checked}
      onChange={e => onChange(e.target.value)}
    />

    <FlexColumnContainer>{children}</FlexColumnContainer>
  </FlexColumnContainer>
);

export default ContentBoxRadioButton;
