import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAdnI18n } from '@im-ui/utils';

import Ribbon, { RibbonProps } from '../src';

storiesOf('Ribbon', module)
  .add('Left', () => {
    const props: RibbonProps = {
      text: 'Topangebote'
    };

    return renderWithThemeAdnI18n(<Ribbon {...props} />);
  })
  .add('Right', () => {
    const props: RibbonProps = {
      text: 'Gebrauchtwagen',
      alignRight: true
    };

    return renderWithThemeAdnI18n(<Ribbon {...props} />);
  });
