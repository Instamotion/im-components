import React from 'react';
import styled, { css } from 'styled-components';
import RadioButton, { RadioButtonLabel } from '@im-ui/radio-button';
import theme from '@im-ui/theme';
import { css as utilsCSS } from '@im-ui/utils';

const { px2rem } = utilsCSS;

export interface RadioButtonsProps<T> {
  label: JSX.Element | string;
  value: T;
}

export enum RadioButtonGroupOrientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal'
}

export type GroupProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation: RadioButtonGroupOrientation;
};

export interface RadioButtonGroupProps<T> {
  className?: string;
  radioButtons: RadioButtonsProps<T>[];
  selected: T;
  orientation: RadioButtonGroupOrientation;
  onChange: (selected: T) => void;
}

export const RadioButtonGroupContainer = styled.div<GroupProps>`
  display: flex;
  margin-bottom: 1rem;

  color: ${theme.color.oil};

  flex-direction: ${props =>
    props.orientation === RadioButtonGroupOrientation.VERTICAL ? 'column' : 'row'};

  ${RadioButtonLabel} {
    margin: ${props =>
      props.orientation === RadioButtonGroupOrientation.VERTICAL
        ? `0 0 ${px2rem(20)} 0`
        : `0 ${px2rem(20)} 0 0`};
  }

  > label:last-child {
    margin-bottom: 0;
  }
`;

function RadioButtonGroup<T>({
  radioButtons,
  selected,
  orientation,
  onChange
}: RadioButtonGroupProps<T>): React.ReactElement<RadioButtonGroupProps<T>> {
  const [selectedOption, setSelectedOption] = React.useState(selected);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val: T = e.target.value as any;
    setSelectedOption(val);
    onChange(val);
  };

  return (
    <RadioButtonGroupContainer orientation={orientation}>
      {radioButtons.map(item => {
        return (
          <RadioButton
            key={String(item.value)}
            label={item.label}
            value={String(item.value)}
            checked={selectedOption === item.value}
            onChange={handleOnChange}
          />
        );
      })}
    </RadioButtonGroupContainer>
  );
}

export default RadioButtonGroup;
