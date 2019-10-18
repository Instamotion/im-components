import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';

interface PaginationItemProps {
  active?: boolean;
  className?: string;
}

const PaginationItem = styled.li`
  display: inline-block;
  list-style: none;
  font-size: 1rem;
  padding: 0 0.4rem;
  color: ${theme.color.brightGrey};
  &:hover {
    font-weight: 900;
    text-decoration: underline;
    color: ${theme.color.niagara};
    cursor: pointer;
  }
  ${(props: PaginationItemProps) =>
    props.active &&
    css`
      font-weight: 900;
      text-decoration: underline;
      &:hover {
        cursor: default;
      }
    `}
`;

export default PaginationItem;
