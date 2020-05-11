import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown, { DropdownOptionProps, DropdownValue } from '@im-ui/dropdown';
import Input, { InputComponentWrapper } from '@im-ui/input';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';

export type Range = [DropdownValue, DropdownValue];

export interface RangeDropdownProps {
  className?: string;
  id: string;
  label?: JSX.Element | string;
  placeholderFrom: string;
  placeholderTo: string;
  optionsFrom: DropdownOptionProps[];
  optionsTo: DropdownOptionProps[];
  onChange?: (range: Range) => void;
}

const RangeSelectField = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 100%;
  position: relative;

  ${InputComponentWrapper} {
    position: absolute;
    z-index: 1;
    width: calc(100% - 2.5rem);
    & > input {
      -moz-appearance: textfield;
      &::placeholder {
        color: ${theme.color.oil};
      }
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;

const RangeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RangeSelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const formRange = (prefix: string, fromVal: DropdownValue, toVal: DropdownValue): Range => {
  return prefix === 'from' ? [fromVal, toVal] : [toVal, fromVal];
};

export const renderSelector = (
  id: string,
  prefix: string,
  placeholder: string,
  value: DropdownValue,
  otherValue: DropdownValue,
  options: DropdownOptionProps[],
  setRange: (range: Range) => void,
  propagateRange: (range: Range) => void
): JSX.Element => (
  <RangeSelectField>
    <Input
      id={`${prefix}-input-${id}`}
      aria-label={`input-${prefix}`}
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={e => setRange(formRange(prefix, e.target.value, otherValue))}
      onBlur={e => propagateRange(formRange(prefix, e.target.value, otherValue))}
    />
    <Dropdown
      id={`from-dropdown-${id}`}
      options={options}
      value={value}
      onChange={(e: any) => propagateRange(formRange(prefix, e.target.value, otherValue))}
    />
  </RangeSelectField>
);

export const parseIntOrFallback = (val: DropdownValue, def: DropdownValue): DropdownValue => {
  if (typeof val === 'string' && val.trim() !== '') {
    const tmp = parseInt(val, 10);
    if (Number.isNaN(tmp)) {
      return def;
    }
    return tmp;
  }
  if (typeof val !== 'number') {
    return def;
  }
  return val;
};

type SendDataFn = (
  placeholder: DropdownValue,
  setRange: (range: Range) => void,
  onChange?: (range: Range) => void
) => (range: Range) => void;

export const sendData: SendDataFn = (placeholder, setRange, onChange) => rng => {
  let [v1, v2] = rng;
  v1 = parseIntOrFallback(v1, placeholder);
  v2 = parseIntOrFallback(v2, placeholder);
  const newRange: Range = v1 > v2 ? [v2, v1] : [v1, v2];
  setRange(newRange);
  if (onChange) {
    onChange(newRange);
  }
};

export const RangeDropdown: React.FC<RangeDropdownProps> = ({
  id,
  label,
  placeholderFrom,
  placeholderTo,
  optionsFrom,
  optionsTo,
  className,
  onChange
}) => {
  const [range, setRange] = useState([optionsFrom[0].value, optionsTo[0].value]);
  const [valueFrom, valueTo] = range;
  return (
    <RangeSelectContainer id={id} className={className}>
      {label && <Label text={label} />}
      <RangeSelectsWrapper>
        {renderSelector(
          id,
          'from',
          placeholderFrom,
          valueFrom,
          valueTo,
          optionsFrom,
          setRange,
          sendData(optionsFrom[0].value, setRange, onChange)
        )}
        {renderSelector(
          id,
          'to',
          placeholderTo,
          valueTo,
          valueFrom,
          optionsTo,
          setRange,
          sendData(optionsTo[0].value, setRange, onChange)
        )}
      </RangeSelectsWrapper>
    </RangeSelectContainer>
  );
};

export default RangeDropdown;
