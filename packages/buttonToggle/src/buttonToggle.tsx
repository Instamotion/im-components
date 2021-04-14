import React from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
export interface ButtonToggleItemProps<A> {
  label: string | JSX.Element;
  value: A;
  disabled?: boolean;
}

export interface ButtonToggleItemStyledProps {
  selected: boolean;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ButtonToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonToggleItem = styled.div<ButtonToggleItemStyledProps>`
  min-width: 3rem;
  min-height: 3rem;
  max-width: 3rem;
  max-height: 3rem;
  line-height: 2.5rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-right: 0.063rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0rem 0rem 0.5rem 0.25rem rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.typo};

  ${props =>
    props.selected &&
    css`
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: #e5e5e5;
      color: ${theme.color.grey};
      cursor: default;
    `}
`;

export interface ButtonToggleProps<A> {
  items: ButtonToggleItemProps<A>[];
  selected: A;
  onChange: (selected: A) => void;
}

function ButtonToggle<A>(props: ButtonToggleProps<A>) {
  const { items, selected, onChange } = props;
  const handleClick = (
    _e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: ButtonToggleItemProps<A>
  ) => {
    if (item.disabled) {
      return;
    }
    onChange(item.value);
  };

  return (
    <ButtonToggleContainer>
      {items.map(item => (
        <ButtonToggleItem
          key={String(item.value)}
          selected={selected == item.value}
          disabled={item.disabled ? item.disabled : false}
          data-value={item.value}
          onClick={e => {
            handleClick(e, item);
          }}
        >
          {item.label}
        </ButtonToggleItem>
      ))}
    </ButtonToggleContainer>
  );
}

export default ButtonToggle;
