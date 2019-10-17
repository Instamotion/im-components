import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Link } from '@im-ui/typography';
import { renderWithThemeAdnI18n } from '@im-ui/utils';
import { Footer } from '../src';

import messages from '../utils/locales';

storiesOf('Footer | Variants', module)
  .add('minimal', () => {
    const items = [
      { text: text('home', 'home'), href: '#' },
      { text: text('test', 'test'), href: '#' },
      { text: text('test1', 'test1'), href: '#' },
      { text: text('test2', 'test2'), href: '#' },
      { text: text('test3', 'test3'), href: '#' }
    ];

    return renderWithThemeAdnI18n(
      <Footer variant="minimal">
        {items.map(item => (
          <Link href={item.href} key={item.text}>
            {item.text}
          </Link>
        ))}
      </Footer>,
      'de',
      messages
    );
  })
  .add('full', () => renderWithThemeAdnI18n(<Footer />, 'de', messages));
