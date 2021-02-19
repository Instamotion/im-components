import React, { useMemo } from 'react';
import Downshift from 'downshift';
import { FlattenSimpleInterpolation } from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon, { AvailableIcons } from '@im-ui/icon';
import Label from '@im-ui/label';
import {
  DropdownButton,
  DropdownIcon,
  DropdownInput,
  DropdownLabel,
  Item,
  Menu,
  DropdownContainer,
  StyledDropdownWrapper
} from './newStyles';

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
  hasBorder?: boolean;
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
  hasError = false,
  hasBorder = false
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
            isPhoneCode={isPhoneCode}
            isOpen={isOpen}
            disabled={isDisabled}
            isActive={isActive}
            hasError={hasError}
            dropMenuBorder={hasBorder}
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
          <Menu
            {...getMenuProps()}
            isOpen={isOpen}
            hasError={hasError}
            dropMenuBorder={hasBorder}
            isPhoneCode={isPhoneCode}
          >
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

export default StyledDropdown;
