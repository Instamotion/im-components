import React from 'react';
import styled, { css } from 'styled-components';
import { TableRow } from './tableRow';
import theme from '@im-ui/theme';

export interface TableFootProps {
  className?: string;
  foo?: string;
}

export const TableFootComponent: React.FC<TableFootProps> = ({ className, children }) => (
  <tfoot className={className}>{children}</tfoot>
);

export const TableFoot = styled(TableFootComponent)`
  ${TableRow} {
    font-size: ${`${theme.table.foot.font.size}px`};
    line-height: ${`${theme.table.foot.font.height}px`};
    letter-spacing: ${`${theme.table.foot.font.spacing}px`};
    font-weight: ${`${theme.table.foot.font.weight}`};
    background-color: ${theme.table.foot.background};
  }
`;
