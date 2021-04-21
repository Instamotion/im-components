import React, { useMemo, useState } from 'react';
import Downshift from 'downshift';
import { FlattenSimpleInterpolation } from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon, { AvailableIcons } from '@im-ui/icon';
import {
  DropdownButton,
  DropdownIcon,
  DropdownInput,
  DropdownLabel,
  Item,
  Menu,
  DropdownContainer,
  StyledDropdownWrapper,
  ErrorMessage,
  StyledLabel
} from './styles';

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
  hasError?: boolean;
  errorMessage?: JSX.Element | string;
  isFloatLabel?: boolean;
  isAbsoluteError?: boolean;
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
  hasError = false,
  required = false,
  isFloatLabel = false,
  isAbsoluteError = false
}) => {
  const validationError = !!errorMessage || hasError;
  const [wasChanged, setWasChanged] = useState(false);
  const hasEditions =
    options && options.length && options.find(option => option.value.includes('_'));
  const isDisabled = !options.length || disabled;
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
      }) => {
        const opened = isOpen && !isDisabled;
        return (
          <StyledDropdownWrapper {...getRootProps()} isOpen={opened} selectStyles={selectStyles}>
            <DropdownContainer
              className={className}
              isPhoneCode={isPhoneCode}
              isOpen={opened}
              disabled={isDisabled}
              isActive={isActive || wasChanged}
              hasError={validationError}
              haveValue={!!selectedItem}
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
                placeholder={placeholder && !isFloatLabel && formatMessage({ id: placeholder })}
                disabled={isDisabled}
              />
              <DropdownButton
                className={className + '-button'}
                isPhoneCode={isPhoneCode}
                isActive={isActive || wasChanged}
                isOpen={opened}
                hasError={validationError}
              >
                {opened ? getOpenIcon() : getCloseIcon()}
              </DropdownButton>
            </DropdownContainer>
            <Menu
              {...getMenuProps()}
              isOpen={opened}
              hasError={validationError}
              isActive={isActive || wasChanged}
              isPhoneCode={isPhoneCode}
              className={className + '-menu'}
              isFloatLabel={isFloatLabel}
            >
              {opened &&
                options.map((item, index) => (
                  <Item
                    isSelected={selectedItem && selectedItem.value === item.value}
                    hasEditions={hasEditions}
                    item={item}
                    {...getItemProps({
                      key: item.value + item.label,
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
            {label && (
              <StyledLabel
                haveValue={!!selectedItem}
                isFloatLabel={isFloatLabel}
                text={label}
                error={validationError}
                required={required}
                disabled={isDisabled}
                {...getLabelProps()}
              />
            )}
            {validationError && errorMessage && (
              <ErrorMessage isFloatLabel={isFloatLabel} isAbsoluteError={isAbsoluteError}>
                {errorMessage}
              </ErrorMessage>
            )}
          </StyledDropdownWrapper>
        );
      }}
    </Downshift>
  );
};

export default StyledDropdown;
