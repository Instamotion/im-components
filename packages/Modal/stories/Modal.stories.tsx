import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';
import Modal from 'react-modal';

import { ModalStyle } from '../src';

storiesOf('Modal', module).add('Default', () => {
  return renderWithThemeAndI18n(
    <Modal>
      <ModalStyle />
    </Modal>
  );
});
