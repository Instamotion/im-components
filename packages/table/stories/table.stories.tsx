import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';

import Table, { TableProps, TableRow, TableCell, TableHead, TableBody, TableFoot } from '../src';

storiesOf('Tables', module)
  .add('with header and footer', () => {
    const tableProps: TableProps = {
      fullWith: true
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fakeRows: any = (amount: number) =>
      [...new Array(amount)].map(key => (
        <TableRow key={key}>
          <TableCell>1</TableCell>
          <TableCell>{`${faker.name.firstName()} ${faker.name.lastName()}`}</TableCell>
          <TableCell>{faker.address.country()}</TableCell>
          <TableCell>{new Intl.DateTimeFormat('de-DE').format(faker.date.future())}</TableCell>
          <TableCell>{faker.address.city()}</TableCell>
        </TableRow>
      ));

    return (
      <Table {...tableProps}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{fakeRows(number('fake rows', 10))}</TableBody>

        <TableFoot>
          <TableRow>
            <TableCell colSpan={3}>With ❤ by Instamotion</TableCell>
            <TableCell colSpan={2} align="right">
              Page 1 / 2
            </TableCell>
          </TableRow>
        </TableFoot>
      </Table>
    );
  })
  .add('without header and footer', () => {
    const tableProps: TableProps = {
      fullWith: true
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fakeRows: any = (amount: number) =>
      [...new Array(amount)].map(key => (
        <TableRow key={key}>
          <TableCell>1</TableCell>
          <TableCell>{`${faker.name.firstName()} ${faker.name.lastName()}`}</TableCell>
          <TableCell>{faker.address.country()}</TableCell>
          <TableCell>{new Intl.DateTimeFormat('de-DE').format(faker.date.future())}</TableCell>
          <TableCell>{faker.address.city()}</TableCell>
        </TableRow>
      ));

    return (
      <Table {...tableProps}>
        <TableBody>{fakeRows(number('fake rows', 10))}</TableBody>
      </Table>
    );
  });
