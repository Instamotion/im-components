import React from 'react';
import { storiesOf } from '@storybook/react';

import theme, { AvailableColors } from '../src';

function keysOf<P, T = keyof P>(obj: P) {
  return (Object.keys(obj) as any) as T[];
}

storiesOf('Common | Theme', module).add('colors', () => {
  return (
    <div>
      {keysOf(theme.color).map((colorName: AvailableColors) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '10rem',
            margin: '1rem',
            backgroundColor: theme.color[colorName]
          }}
        >
          {colorName}
        </div>
      ))}
    </div>
  );
});
