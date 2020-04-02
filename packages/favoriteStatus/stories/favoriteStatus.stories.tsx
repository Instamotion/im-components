import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import messages from '../utils/locales';

import FavoriteStatus, { FavoriteStatusProps } from '../src';

storiesOf('CarTile', module).add('Favorite star', () => {
  const props: FavoriteStatusProps = {
    text: "This is new componenet's template."
  };

  return renderWithThemeAndI18n(
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flex: 1,
        padding: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
      }}
    >
      <FavoriteStatus {...props} />
    </div>,
    'de',
    messages
  );
});
