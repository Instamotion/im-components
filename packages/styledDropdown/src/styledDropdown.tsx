import React, { useMemo } from 'react';
import Downshift from 'downshift';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Label from '@im-ui/label';
import theme from '@im-ui/theme';

export type OptionType = {
  value: string;
  label: string;
  iconName?: AvailableIcons;
  isSelected?: boolean;
};

export interface StyledDropdownProps {
  options: OptionType[];
  label?: JSX.Element | string;
  disabled?: boolean;
  placeholder?: string;
  defaultItem?: OptionType;
  onChange?: (selectedItem: OptionType) => void;
  selectStyles?: FlattenSimpleInterpolation;
  isActive?: boolean;
  hasError?: boolean;
}

const StyledDropdown: React.FC<StyledDropdownProps> = ({
  options,
  label,
  disabled,
  placeholder,
  defaultItem,
  onChange,
  selectStyles,
  isActive,
  hasError = false
}) => {
  const hasEditions =
    options && options.length && options.find(option => option.value.includes('_'));
  const isDisabled = options.length ? disabled : true;
  const { formatMessage } = useIntl();
  const isPhoneCode: boolean = useMemo(() => !!selectStyles, [selectStyles]);

  return (
    <Downshift
      onChange={onChange}
      itemToString={item => item && formatMessage({ id: item.label })}
      selectedItem={defaultItem} //TODO: fix console warning
      inputValue={
        defaultItem
          ? formatMessage({ id: isPhoneCode ? defaultItem.value : defaultItem.label })
          : ''
      }
    >
      {({
        getRootProps,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
        getLabelProps,
        getInputProps,
        isOpen,
        selectedItem
      }) => (
        <StyledDropdownWrapper {...getRootProps()} selectStyles={selectStyles}>
          {label && <Label text={label} disabled={isDisabled} {...getLabelProps()} />}
          <DropdownContainer
            isOpen={isOpen}
            disabled={isDisabled}
            isActive={isActive}
            hasError={hasError}
            {...getToggleButtonProps()}
          >
            {selectedItem && selectedItem.iconName && (
              <DropdownIcon
                icon={selectedItem.iconName}
                color={isDisabled ? 'silver' : 'niagara'}
              />
            )}
            <DropdownInput
              {...getInputProps()}
              readOnly
              placeholder={placeholder && formatMessage({ id: placeholder })}
              disabled={isDisabled}
            />
            <DropdownButton
              isPhoneCode={isPhoneCode}
              isActive={isActive}
              isOpen={isOpen}
              hasError={hasError}
            >
              {isOpen ? (
                <Icon icon="up" color="oil" />
              ) : (
                <Icon icon="down" color={isDisabled ? 'silver' : 'oil'} />
              )}
            </DropdownButton>
          </DropdownContainer>
          <Menu {...getMenuProps()} isOpen={isOpen} hasError={hasError}>
            {isOpen &&
              options.map((item, index) => (
                <Item
                  isSelected={selectedItem && selectedItem.value === item.value}
                  hasEditions={hasEditions}
                  item={item}
                  {...getItemProps({
                    key: item.value,
                    item,
                    index
                  })}
                >
                  {item.iconName && <DropdownIcon icon={item.iconName} color="niagara" />}
                  <DropdownLabel>
                    <FormattedMessage id={item.label} />
                  </DropdownLabel>
                </Item>
              ))}
          </Menu>
        </StyledDropdownWrapper>
      )}
    </Downshift>
  );
};

const StyledDropdownWrapper = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  position: relative;
  ${({ selectStyles }: { selectStyles: FlattenSimpleInterpolation }) => selectStyles};
`;

type menuProps = { isOpen: boolean; hasError: boolean };

const Menu = styled.ul<menuProps>`
  background: #fff;
  border: solid 0.0625rem ${({ hasError }) => (hasError ? theme.color.flamePea : theme.color.downy)};
  border-top: 0;
  box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: auto;
  margin-top: 0;
  max-height: 22.5rem;
  overflow-x: hidden;
  padding: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
  &::-webkit-scrollbar {
    background: transparent;
    width: 1.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.silver};
    border: 0.5rem solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }
  ${({ isOpen }) =>
    !isOpen &&
    css`
      border: 0;
    `}
`;

export const Item = styled.li`
  align-items: center;
  background-clip: border-box;
  border-top: none;
  color: ${theme.color.brightGrey};
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  padding-left: 1.125rem;
  white-space: normal;
  word-wrap: break-word;
  &:hover {
    background-color: ${theme.color.lightGrey};
  }
  ${(props: { isSelected: boolean; hasEditions: boolean; item: OptionType }) =>
    props.hasEditions &&
    props.item.value &&
    !props.item.value.includes('_') &&
    `
      padding-left: 2.125rem;
  `}
  ${(props: { isSelected: boolean; hasEditions: boolean; item: OptionType }) =>
    props.isSelected &&
    css`
      font-weight: bold;
    `};
`;

type DropdownButtonType = {
  isPhoneCode?: boolean;
  isActive?: boolean;
  isOpen?: boolean;
  hasError: boolean;
};

export const DropdownButton = styled.div<DropdownButtonType>`
  cursor: pointer;
  margin-left: auto;
  margin-right: 0.5rem;
  ${({ isPhoneCode, isActive, isOpen, hasError }) =>
    isPhoneCode &&
    `
    align-items: center;
    display: flex;
    height: 100%;
    padding-right: .5rem;
    border-right: 0.0625rem solid ${
      hasError
        ? theme.color.flamePea
        : isActive || isOpen
        ? theme.color.downy
        : theme.input.border.color
    };
  `}
`;

type containerProps = {
  isOpen: boolean;
  disabled?: boolean;
  hasError: boolean;
  isActive?: boolean;
};

const DropdownContainer = styled.div<containerProps>`
  align-items: center;
  border-radius: 0.25rem;
  border: 0.0625rem solid ${({ hasError }) =>
    hasError ? theme.color.flamePea : theme.color.silver};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  padding: .25rem 0 .25rem 1.125rem;
  position: relative;
  user-select:none;
  z-index: 1;
  ${({ isOpen, disabled, hasError }) =>
    !isOpen &&
    !disabled &&
    css`
      &:hover {
        box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.1);
        border: 0.0625rem solid ${hasError ? theme.color.flamePea : theme.color.downy};

        ${DropdownButton} {
          border-color: ${hasError ? theme.color.flamePea : theme.color.downy};
        }
      }
    `}
  ${({ isOpen, disabled, hasError }) =>
    isOpen &&
    css`
      transform: rotateZ(0);
      border-radius: 0.25rem 0.25rem 0 0;
      border: solid 0.0625rem ${hasError ? theme.color.flamePea : theme.color.downy};
      border-bottom: 0.0625rem solid transparent;
      &:after {
        content: '';
        width: calc(100% - 1rem);
        height: 100%;
        border-bottom: 0.0625rem solid ${hasError ? theme.color.flamePea : theme.color.downy};
        display: inline-block;
        margin-left: 0.5rem;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      &:focus {
        outline: none;
      }
    `}
  ${({ isOpen, disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
  ${({ isActive, isOpen, hasError }) =>
    isActive &&
    !isOpen &&
    css`
      border-color: ${hasError ? theme.color.flamePea : theme.color.downy};
    `}
`;

const DropdownInput = styled.input`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: transparent;
  color: ${theme.color.brightGrey};
  font-size: 1rem;
  font-family: ${theme.font.sans.family};
  &:focus {
    outline: none;
  }
  ${(props: { disabled?: boolean }) =>
    props.disabled &&
    css`
      color: ${theme.color.silver};
    `}

  &:after {
    content: '';
  }
`;

const DropdownIcon = styled(Icon)`
  margin-right: 1rem;
`;

export const DropdownLabel = styled.div`
  user-select: none;
`;

export default StyledDropdown;
