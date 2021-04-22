import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Icon from '@im-ui/icon';
import ContentBoxRadioButton from './ContentBoxRadioButton';

export interface RadioButtonsProps<T> {
  label: JSX.Element | string;
  value: T;
}

export interface ContentBoxRadioButtonGroupProps<T> {
  className?: string;
  radioButtons: RadioButtonsProps<T>[];
  selected: T;
  onChange: (selected: T) => void;
}

interface ContentBoxWrapperProps {
  buttonsNumber: number;
  selected: boolean;
}

const ContentBoxRadioButtonGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  filter: drop-shadow(0rem 0.125rem 0.5rem rgba(0, 0, 0, 0.05));
`;

const ContentBoxRadioButtonWrapper = styled.div<ContentBoxWrapperProps>`
  flex: 1 1 100%;
  padding: 1.25rem;
  border-radius: 0.75rem;
  margin: 0.5rem 0rem 1rem 0rem;
  box-shadow: 0rem 0rem 0.375rem rgba(0, 0, 0, 0.1);
  cursor: pointer;

  // In the future if more content boxes will be added we can handle responsivness with number boxes in group
  ${theme.mediaQueries.whenDesktop} {
    flex: 1 1 ${(props: { buttonsNumber: number }) => 100 / props.buttonsNumber - 10}%;
    margin: 1.25rem 0 1rem 0.4rem;

    :first-child {
      margin: 1.25rem 0.4rem 1rem 0;
    }
  }

  ${props =>
    props.selected &&
    css`
      border: 0.063rem solid ${theme.color.downy};

      border-radius: 0.75rem;
    `};
`;

const UspItem = styled.div`
  display: flex;
  height: 0.8rem;
  margin-top: 1.25rem;

  :first-child {
    margin-top: 0.813rem;
  }

  :last-child {
    margin-bottom: 0.813rem;
  }
`;

const UspText = styled.span`
  font-size: 0.75rem;
  line-height: 0.75rem;
  text-align: left;
  color: ${theme.color.typo};
  max-width: 13.75rem;
  padding-top: 0.2rem;
`;

const CheckIconWrapper = styled.span`
  min-width: 1rem;
  min-height: 1rem;
  margin-right: 0.5rem;
`;

function ContentBoxRadioButtonGroup<T>({
  radioButtons,
  selected,
  onChange
}: ContentBoxRadioButtonGroupProps<T>): React.ReactElement<ContentBoxRadioButtonGroupProps<T>> {
  const [selectedOption, setSelectedOption] = useState(selected);
  const numberOfRadioButtons = useMemo(() => radioButtons.length, [radioButtons]);

  // TODO fetch from contentful
  const USP_MAPPINGS = {
    easygo: [
      'Niedrige monatliche Raten​',
      'Bis zu 61 Monate Laufzeit​',
      'Schlussrate oder Refinanzierung am Ende der Laufzeit​'
    ],
    classic: ['Ohne Schlussrate​', 'Bis zu 96 Monate Laufzeit​', 'Kredit nach Laufzeit getilgt​']
  };

  const handleOnSelect = (val: T): void => {
    setSelectedOption(val);
    onChange(val);
  };

  return (
    <ContentBoxRadioButtonGroupWrapper>
      {radioButtons.map(item => {
        return (
          <ContentBoxRadioButtonWrapper
            buttonsNumber={numberOfRadioButtons}
            key={String(item.value)}
            selected={selectedOption === item.value}
            onClick={() => handleOnSelect(item.value)}
          >
            <ContentBoxRadioButton
              key={String(item.value)}
              label={item.label}
              value={String(item.value)}
              checked={selectedOption === item.value}
              onChange={() => handleOnSelect(item.value)}
            >
              {USP_MAPPINGS[String(item.value) === 'classic' ? 'classic' : 'easygo'].map(
                (usp: string, index: number) => (
                  <UspItem key={index}>
                    <CheckIconWrapper>
                      <Icon icon="radioCheck" />
                    </CheckIconWrapper>
                    <UspText>{usp}</UspText>
                  </UspItem>
                )
              )}
            </ContentBoxRadioButton>
          </ContentBoxRadioButtonWrapper>
        );
      })}
    </ContentBoxRadioButtonGroupWrapper>
  );
}

export default ContentBoxRadioButtonGroup;
