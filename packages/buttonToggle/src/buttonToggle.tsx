import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import { css as cssUtils } from '@im-ui/utils';

const { px2rem } = cssUtils;

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
`;

export const ButtonToggleItem = styled.div<ButtonToggleItemStyledProps>`
  min-width: ${px2rem(20)};
  max-width: ${px2rem(40)};
  height: ${px2rem(40)};
  line-height: ${px2rem(40)};
  border: ${px2rem(0.5)} solid ${theme.color.silver};
  border-radius: ${px2rem(4)};
  text-align: center;
  margin-right: ${px2rem(1)};
  cursor: pointer;
  flex: 1;

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
