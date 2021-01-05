import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import Error from '../src';

const ErrorFiveHundred = (): React.ReactElement => {
  return renderWithThemeAndI18n(
    <>
      <div>content for 500 Error page</div>
      <Error statusCode={500} />
    </>,
    'de',
    {
      de: {
        'page500.line_one': '500',
        'page500.line_two': 'Example'
      }
    }
  );
};

const ErrorFourThousand = (): React.ReactElement => {
  return renderWithThemeAndI18n(
    <>
      <div>content for 500 Error page</div>
      <Error statusCode={404} />
    </>,
    'de',
    {
      de: {
        'page404.line_one': 'HOPPLA!',
        'page404.line_two': 'Seite nicht gefunden'
      }
    }
  );
};

storiesOf('Error', module)
  .add('500', () => <ErrorFiveHundred />)
  .add('404', () => <ErrorFourThousand />);
