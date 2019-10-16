import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import { TableCell } from './tableCell';
import { TableRow } from './tableRow';
import { TableFoot } from './tableFoot';
import { TableHead } from './tableHead';
import { TableBody } from './tableBody';

export interface TableProps {
  className?: string;
  fullWith?: boolean;
}

export const TableComponent: React.FC<TableProps> = ({ className, children }) => (
  <table className={className} cellPadding="0" cellSpacing="0">
    {children}
  </table>
);

const Table = styled(TableComponent)`
  /* First Row */
  ${TableHead} ${TableRow}:first-of-type {
    ${TableCell} {
      border-top: 1px solid ${theme.table.outerBorder.color};
      border-bottom: ${`${theme.table.innerBorder.width}px`} solid ${theme.table.innerBorder.color};
      border-right: ${`${theme.table.innerBorder.width}px`} solid ${theme.table.innerBorder.color};
      :first-of-type {
        border-left: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-top-left-radius: ${`${theme.table.outerBorder.radius}px`};
      }
      :last-child {
        border-right: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-top-right-radius: ${`${theme.table.outerBorder.radius}px`};
      }
    }
  }

  ${TableBody}:only-child ${TableRow}:first-of-type {
    ${TableCell} {
      border-top: ${`${theme.table.outerBorder.width}px`} solid ${theme.table.outerBorder.color};
      :first-of-type {
        border-left: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-top-left-radius: ${`${theme.table.outerBorder.radius}px`};
      }
      :last-child {
        border-right: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-top-right-radius: ${`${theme.table.outerBorder.radius}px`};
      }
    }
  }

  /* Middle Rows */
  ${TableRow}:not(:first-of-type),
  ${TableRow}:not(:last-child) {
    ${TableCell} {
      border-right: ${`${theme.table.innerBorder.width}px`} solid ${theme.table.innerBorder.color};
      border-bottom: ${`${theme.table.innerBorder.width}px`} solid ${theme.table.innerBorder.color};
      :first-of-type {
        border-left: ${`${theme.table.outerBorder.width}px`} solid ${theme.table.outerBorder.color};
      }

      :last-child {
        border-right: ${`${theme.table.outerBorder.width}px`} solid ${theme.table.outerBorder.color};
      }
    }
  }

  /* Last Row */
  ${TableFoot} ${TableRow}:last-of-type {
    ${TableCell} {
      border-bottom: ${`${theme.table.outerBorder.width}px`} solid ${theme.table.outerBorder.color};
      border-right: ${`${theme.table.innerBorder.width}px`} solid ${theme.table.innerBorder.color};
      :first-of-type {
        border-bottom: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-left: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-bottom-left-radius: ${`${theme.table.outerBorder.radius}px`};
      }
      :last-child {
        border-bottom: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-right: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-bottom-right-radius: ${`${theme.table.outerBorder.radius}px`};
      }
    }
  }

  ${TableBody}:only-child ${TableRow}:last-of-type {
    ${TableCell} {
      border-bottom: ${`${theme.table.outerBorder.width}px`} solid ${theme.table.outerBorder.color};
      :first-of-type {
        border-left: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-bottom-left-radius: ${`${theme.table.outerBorder.radius}px`};
      }
      :last-child {
        border-right: ${`${theme.table.outerBorder.width}px solid ${theme.table.outerBorder.color}`};
        border-bottom-right-radius: ${`${theme.table.outerBorder.radius}px`};
      }
    }
  }
`;

export default Table;
