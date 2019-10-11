import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Heading, { HeadingProps } from '../src/heading';
import Link, { LinkProps } from '../src/link';
import Text, { TextProps } from '../src/text';

storiesOf('General | Typography', module)
  .add('Heading', () => {
    const props: HeadingProps = {
      className: text('className', ''),
      size: select('size', ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs'], 'xxl')
    };
    return <Heading {...props}>{text('children', 'Hello World')}</Heading>;
  })
  .add('Text', () => {
    const props: TextProps = {
      className: text('className', ''),
      tag: select('tag', { p: 'p', span: 'span' }, 'span')
    };
    return <Text {...props}>{text('children', 'Hello World')}</Text>;
  })
  .add('Link', () => {
    const props: LinkProps = {
      className: text('className', ''),
      href: text('href', 'http://example.com')
    };
    return <Link {...props}>{text('children', 'Hello World')}</Link>;
  });
