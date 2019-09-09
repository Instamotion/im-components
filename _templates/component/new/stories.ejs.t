---
to: packages/<%= name %>/stories/<%= name %>.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= name %>, { <%= name %>Props } from './<%= name %>';

storiesOf('<%= name %>', module)
  .add('with text', () => {
    return (
      <<%= name %> />
    );
  });
