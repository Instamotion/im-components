import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import Modal, { ModalProps } from '../src';

storiesOf('Modal', module).add('Default', () => {
  const props: ModalProps = {
    text: "This is new componenet's template."
  };

  return renderWithThemeAndI18n(<Modal {...props} />);
});
