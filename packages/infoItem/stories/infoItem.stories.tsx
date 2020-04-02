import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAdnI18n } from '@im-ui/utils';

import InfoItem, { InfoItemProps } from '../src';

storiesOf('CarTile', module).add('Info Item', () => {
  const props: InfoItemProps = {
    fuel: 'DIESEL'
  };

  return renderWithThemeAdnI18n(<InfoItem {...props} />);
});
