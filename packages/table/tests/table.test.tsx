/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import theme from '@themes/default';

import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableRow from './TableRow';

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
