import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { renderWithThemeAdnI18n } from '@instamotion/utils';
import Label from '@instamotion/label';
import Dropdown, { DropdownOptionProps, DropdownProps } from '../src';

const options: DropdownOptionProps[] = [
  { value: 'de', label: 'Germany' },
  { value: 'at', label: 'Austria' },
  { value: 'ch', label: 'Switzerland' }
];

storiesOf('Controls | Dropdown', module)
  .add('with label', () => {
    const props: DropdownProps = {
      id: 'dropdown-1',
      options,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        action('selected')(e.target.selectedIndex);
      }
    };

    return renderWithThemeAdnI18n(
      <Fragment>
        <Label>label</Label>
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

    return renderWithThemeAdnI18n(<Dropdown {...props} />, 'de', {
      de: {
        Germany: 'Germany',
        Austria: 'Austria',
        Switzerland: 'Switzerland'
      }
    });
  });
