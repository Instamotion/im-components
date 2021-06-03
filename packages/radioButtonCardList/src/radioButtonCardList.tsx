import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioButtonCard } from '.';

interface RadioButtonsProps<T> {
  label: JSX.Element | string;
  value: T;
}

export interface RadioButtonCardListProps<T> {
  className?: string;
  radioButtons: RadioButtonsProps<T>[];
  value: T;
  onChange: (selected: T) => void;
}
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const RadioButtonCardList = <T extends unknown>({
  radioButtons,
  value,
  onChange
}: RadioButtonCardListProps<T>): React.ReactElement<RadioButtonCardListProps<T>> => (
  <FlexColumnContainer>
    {radioButtons.map(item => (
      <RadioButtonCard
        label={item.label}
        value={item.value}
        checked={value === item.value}
        onChange={onChange}
      />
    ))}
  </FlexColumnContainer>
);

export default RadioButtonCardList;
