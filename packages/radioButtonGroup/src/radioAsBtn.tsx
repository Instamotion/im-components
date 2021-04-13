import Icon, { AvailableIcons } from '@im-ui/icon';
import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';

export interface RadioAsBtnItem {
  label: string | JSX.Element;
  value: string | JSX.Element;
  leftIcon?: AvailableIcons | JSX.Element;
  rightIcon?: AvailableIcons | JSX.Element;
}

export interface RadioAsBtnProps {
  items: RadioAsBtnItem[];
  groupName: string;
  value?: RadioAsBtnItem;
  spacing?: number;
  height?: number;
  className?: string;
  onChange: (item: RadioAsBtnItem) => void;
}

const RadioAsBtn: React.FC<RadioAsBtnProps> = ({
  items,
  groupName,
  value,
  spacing,
  height,
  className,
  onChange
}) => {
  const renderIcon = (item: any, position: string) => {
    if (typeof item !== 'string') {
      return item;
    } else {
      return (
        <Icon icon={item as AvailableIcons} color="brightGrey" className={`icon-${position}`} />
      );
    }
  };

  return items ? (
    <Container length={items.length} spacing={spacing || 2} className={className}>
      {items.map((el: RadioAsBtnItem) => (
        <ItemContainer className="radio-item" height={height || 4} checked={el == value}>
          {el.leftIcon && renderIcon(el.leftIcon, 'left')}
          {el.label}
          {el.rightIcon && renderIcon(el.rightIcon, 'right')}
          <InputPlaceholder
            onChange={() => onChange(el)}
            checked={el == value}
            type="radio"
            name={groupName}
          />
        </ItemContainer>
      ))}
    </Container>
  ) : null;
};

export const ItemContainer = styled.label<{ checked: boolean; height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 6px;
  height: ${({ height }) => height}rem;
  position: relative;
  cursor: pointer;
  background-color: ${theme.color.lighterGrey};

  ${({ checked }) => checked && `border: 2px solid ${theme.color.secondary};`}

  svg {
    margin: 0.5rem;
  }
`;

const Container = styled.div<{ length: number; spacing: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .radio-item {
    ${({ spacing, length }) => {
      const marginSum = spacing * length - 1;
      return `
        flex-basis: calc((100% - ${marginSum}rem)/${length});
      `;
    }}

    &:last-child {
      margin-right: 0;
    }
  }
`;

const InputPlaceholder = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export default RadioAsBtn;
