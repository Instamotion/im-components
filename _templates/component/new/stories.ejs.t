---
to: packages/<%= name %>/stories/<%= name %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAdnI18n } from '@im-ui/utils';

import <%= h.changeCase.pascalCase(name) %>, { <%= h.changeCase.pascalCase(name) %>Props } from '../src';

storiesOf('<%= h.changeCase.titleCase(name) %>', module)
  .add('Default', () => {
    const props: <%= h.changeCase.pascalCase(name) %>Props = {
      text: "This is new componenet's template."
    };

    return renderWithThemeAdnI18n(<<%= h.changeCase.pascalCase(name) %> {...props} />);
  });
