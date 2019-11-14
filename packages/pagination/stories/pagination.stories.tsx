import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { addons } from '@storybook/addons';

export const emitter = (name: string, value: any): void => addons.getChannel().emit(name, value);
const updateKnob = (name: string, value: any): void => {
  emitter('storybookjs/knobs/change', { name, value });
};

import Pagination, { PaginationProps } from '../src';
import { renderWithThemeAndI18n } from '@im-ui/utils';

const story = storiesOf('Pagination', module);

story.add('pagination (clickable)', () => {
  const props: PaginationProps = {
    currentPage: number('currentPage', 1, {}),
    totalPages: number('totalPages', 56, {}),
    pagePadding: number('pagePadding', 2, {}),
    onPageChange: idx => updateKnob('currentPage', idx)
  };
  return renderWithThemeAndI18n(<Pagination {...props} />);
});
