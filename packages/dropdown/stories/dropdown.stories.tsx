import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Label from '@im-ui/label';
import Dropdown, { DropdownOptionProps, DropdownProps } from '../src';

const options: DropdownOptionProps[] = [
  { value: 'de', label: 'Germany' },
  { value: 'at', label: 'Austria' },
  { value: 'ch', label: 'Switzerland' }
];

storiesOf('Dropdown', module)
  .add('with label and error message', () => {
    const props: DropdownProps = {
      id: 'dropdown-1',
      errorMessage: <>error message</>,
      required: true,
      options,
      label: 'country',
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        action('selected')(e.target.selectedIndex);
      }
    };

    return renderWithThemeAndI18n(
      <Fragment>
        <Dropdown {...props} />
      </Fragment>,
      'de',
      {
        de: {
          Germany: 'Germany',
          Austria: 'Austria',
          Switzerland: 'Switzerland'
        }
      }
    );
  })
  .add('with preselected value', () => {
    const props: DropdownProps = {
      id: 'dropdown-1',
      options,
      selected: 'at',
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        action('selected')(e.target.selectedIndex);
      }
    };

    return renderWithThemeAndI18n(<Dropdown {...props} />, 'de', {
      de: {
        Germany: 'Germany',
        Austria: 'Austria',
        Switzerland: 'Switzerland'
      }
    });
  });
