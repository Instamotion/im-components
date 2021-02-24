import React, { useMemo, useState } from 'react';
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
  StyledDropdownWrapper,
  ErrorMessage
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
  openStateIcon?: JSX.Element;
  closeStateIcon?: JSX.Element;
  selectStyles?: FlattenSimpleInterpolation;
  isActive?: boolean;
  required?: boolean;
  className?: string;
  errorMessage?: JSX.Element | string;
}

const StyledDropdown: React.FC<StyledDropdownProps> = ({
  options,
  label,
  disabled,
  placeholder,
  defaultItem,
  onChange,
  openStateIcon,
  closeStateIcon,
  selectStyles,
  isActive,
  className,
  errorMessage,
  required = false
}) => {
  const hasError = !!errorMessage;
  const [wasChanged, setWasChanged] = useState(false);
  const hasEditions =
    options && options.length && options.find(option => option.value.includes('_'));
  const isDisabled = options.length ? disabled : true;
  const { formatMessage } = useIntl();
  const isPhoneCode: boolean = useMemo(() => !!selectStyles, [selectStyles]);

  const handleChange = (selectedItem: OptionType) => {
    setWasChanged(true);
    onChange?.(selectedItem);
  };

  const getOpenIcon = () => {
    return openStateIcon ? openStateIcon : <Icon icon="up" color="oil" />;
  };
  const getCloseIcon = () => {
    return closeStateIcon ? (
      openStateIcon
    ) : (
      <Icon icon="down" color={isDisabled ? 'silver' : 'oil'} />
    );
  };

  return (
    <Downshift
      onChange={handleChange}
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
          {label && (
            <Label
              text={label}
              error={hasError}
              required={required}
              disabled={isDisabled}
              {...getLabelProps()}
            />
          )}
          <DropdownContainer
            className={className}
            isPhoneCode={isPhoneCode}
            isOpen={isOpen}
            disabled={isDisabled}
            isActive={isActive || wasChanged}
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
              className={className + '-button'}
              isPhoneCode={isPhoneCode}
              isActive={isActive || wasChanged}
              isOpen={isOpen}
              hasError={hasError}
            >
              {isOpen ? getOpenIcon() : getCloseIcon()}
            </DropdownButton>
          </DropdownContainer>
          <Menu
            {...getMenuProps()}
            isOpen={isOpen}
            hasError={hasError}
            isActive={isActive || wasChanged}
            isPhoneCode={isPhoneCode}
            className={className + '-menu'}
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
          {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledDropdownWrapper>
      )}
    </Downshift>
  );
};

export default StyledDropdown;
