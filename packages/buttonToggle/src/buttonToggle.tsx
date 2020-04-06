import styled, { css } from 'styled-components';
import React, { useState } from 'react';
import theme from '@im-ui/theme';
import { px2rem } from '../../utils/src/css';

type StringOrNumber = string | number;

export interface ButtonToggleItemProps {
  label: string | JSX.Element;
  value: StringOrNumber;
  disabled?: boolean;
}

export interface ButtonToggleItemStyledProps {
  selected: boolean;
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ButtonToggleContainer = styled.div`
  display: flex;
`;

export const ButtonToggleItem = styled.div<ButtonToggleItemStyledProps>`
  min-width: ${px2rem(40)};
  height: ${px2rem(40)};
  line-height: ${px2rem(40)};
  border: ${px2rem(0.5)} solid ${theme.color.silver};
  border-radius: ${px2rem(4)};
  text-align: center;
  margin-right: ${px2rem(1)};
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      border-color: ${theme.color.downy};
      background-color: ${theme.color.downy};
      font-weight: 600;
      color: ${theme.color.white};
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: ${theme.color.lightGrey};
      color: ${theme.color.silver};
      cursor: default;
    `}
`;

export interface ButtonToggleProps {
  items: ButtonToggleItemProps[];
  selected: StringOrNumber;
  onChange: (selected: StringOrNumber) => void;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ items, selected, onChange }) => {
  const [selectedItem, setSelectedItem] = useState<StringOrNumber>(selected);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: ButtonToggleItemProps
  ) => {
    if (item.disabled) {
      return;
    }

    setSelectedItem(item.value);
    onChange(item.value);
  };

  return (
    <ButtonToggleContainer>
      {items.map(item => (
        <ButtonToggleItem
          key={String(item.value)}
          selected={selectedItem == item.value}
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
};

export default ButtonToggle;
