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
  selected: T;
  onChange: (selected: T) => void;
}
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

function RadioButtonCardList<T>({
  radioButtons,
  selected,
  onChange
}: RadioButtonCardListProps<T>): React.ReactElement<RadioButtonCardListProps<T>> {
  const [selectedOption, setSelectedOption] = useState(selected);

  const handleOnChange = (val: any): void => {
    setSelectedOption(val);
    onChange(val);
  };

  return (
    <FlexColumnContainer>
      {radioButtons.map(item => (
        <RadioButtonCard
          label={item.label}
          value={String(item.value)}
          checked={selectedOption === item.value}
          onChange={handleOnChange}
        />
      ))}
    </FlexColumnContainer>
  );
}

export default RadioButtonCardList;
