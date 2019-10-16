/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import theme from '@im-ui/theme';

import Table from '../src';
import TableBody from '../src';
import TableCell from '../src';
import TableHead from '../src';
import TableFoot from '../src';
import TableRow from '../src';

describe('Table', () => {
  it('renders', () => {
    const wrapper = mount(
      <Table theme={theme}>
        <TableHead theme={theme}>
          <TableRow theme={theme}>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableHead>
        <TableBody theme={theme}>
          <TableRow theme={theme}>
            <TableCell theme={theme}>Test</TableCell>
          </TableRow>
        </TableBody>
        <TableFoot theme={theme}>
          <TableRow theme={theme}>
            <TableCell theme={theme}>Test</TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    );

    expect(wrapper.find('td')).toHaveLength(3);
  });
});
