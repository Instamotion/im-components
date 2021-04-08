import React, { useState } from 'react';
import Downshift from 'downshift';
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
  StyledLabel
} from './styles';

export type Option = {
  value: string;
  label: string;
  iconName?: AvailableIcons;
  isSelected?: boolean;
  disabled?: boolean;
};

export interface DropdownProps {
  options: Option[];
  label?: string;
  disabled?: boolean;
  filterable?: boolean;
  placeholder?: string;
  defaultItem?: Option;
  isFloatLabel?: boolean;
  onChange?: (selectedItem: Option) => void;
}

const StyledDropdown: React.FC<DropdownProps> = ({
  options,
  label,
  disabled,
  filterable = true,
  placeholder,
  defaultItem,
  isFloatLabel = false,
  onChange
}) => {
  const { formatMessage } = useIntl();
  const [previousValue, setPreviousValue] = useState(defaultItem?.value);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const isDisabled = options?.length ? disabled : true;
  const hasEditions = options?.length && options?.find(option => option.value[0] === '_'); // editions from BE have format _someEdition

  return (
    <Downshift
      onChange={onChange}
      onInputValueChange={(value: string) => {
        filterable &&
          setIsUserTyping(
            Boolean(
              (value.length || previousValue?.length) &&
                previousValue &&
                (value.includes(previousValue) || previousValue.includes(value))
            )
          );
      }}
      itemToString={item => item && formatMessage({ id: item.label })}
      selectedItem={defaultItem} // TODO: fix console warning
      {...(!filterable && {
        inputValue: defaultItem ? formatMessage({ id: defaultItem.label }) : ''
      })}
    >
      {({
        getRootProps,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
        getLabelProps,
        getInputProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => {
        const isAnySelected = inputValue === placeholder;
        let filteredOptions: any;
        if (filterable && isOpen) {
          filteredOptions = options;
          const inputValueInLowerCase = inputValue?.toLowerCase() || '';
          const isFullTitleSelected = options.some((item: Option) => {
            const value = item.value.toLowerCase().replace('_', '');
            return !!inputValueInLowerCase && value === inputValueInLowerCase;
          });
          const isFilterable = selectedItem.value !== '' && !isFullTitleSelected && !isAnySelected;

          if (isUserTyping || isFilterable) {
            // Filter out all useless options, save labels
            filteredOptions = options.filter(
              item =>
                item.value.toLowerCase().includes(inputValueInLowerCase) ||
                (item.disabled && item.value)
            );
            // Filter out all useless labels
            filteredOptions = filteredOptions.filter((item: any, i: number) => {
              const hasAnyOptionsAfter = filteredOptions[i + 1] && !filteredOptions[i + 1].disabled;
              return hasAnyOptionsAfter || !item.disabled;
            });
            // Show error message if there's no options/labels left
            if (filteredOptions.length === 0) {
              const LabelNotFound = formatMessage({
                id: 'serp.filters.notFound'
              });
              filteredOptions.push({
                disabled: true,
                label: LabelNotFound,
                value: LabelNotFound
              });
            }
          }
        } else {
          setIsUserTyping(false);
        }
        setPreviousValue(inputValue || '');

        return (
          <StyledDropdownWrapper {...getRootProps()}>
            <DropdownContainer
              isOpen={isOpen}
              haveValue={!!selectedItem}
              disabled={isDisabled}
              {...getToggleButtonProps()}
            >
              {selectedItem?.iconName && (
                <DropdownIcon
                  icon={selectedItem.iconName}
                  color={isDisabled ? 'silver' : 'niagara'}
                />
              )}
              <DropdownInput
                spellCheck={false}
                {...getInputProps()}
                {...(filterable && isAnySelected && { value: '' })}
                readOnly={!filterable}
                placeholder={placeholder && formatMessage({ id: placeholder })}
                disabled={isDisabled}
              />
              <DropdownButton isOpen={isOpen}>
                {isOpen ? (
                  <Icon icon="up" color="oil" />
                ) : (
                  <Icon icon="down" color={isDisabled ? 'silver' : 'oil'} />
                )}
              </DropdownButton>
            </DropdownContainer>
            <Menu {...getMenuProps()} isOpen={isOpen} isFloatLabel={isFloatLabel}>
              {isOpen &&
                (filteredOptions || options).map((item: any, index: number) => (
                  <Item
                    isSelected={selectedItem?.value === item.value}
                    hasEditions={hasEditions}
                    item={item}
                    highlighted={
                      filterable && index === highlightedIndex && !Boolean(item.disabled)
                    }
                    {...getItemProps({
                      key: item.value,
                      item,
                      index,
                      disabled: Boolean(item.disabled)
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
                text={formatMessage({ id: label })}
                disabled={isDisabled}
                {...getLabelProps()}
              />
            )}
          </StyledDropdownWrapper>
        );
      }}
    </Downshift>
  );
};

export default StyledDropdown;
