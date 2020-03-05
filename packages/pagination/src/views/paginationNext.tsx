import * as React from 'react';
import styled from 'styled-components';
import Button from '@im-ui/button';
import theme from '@im-ui/theme';
import Icon from '@im-ui/icon';

interface PaginationNextProps {
  display: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Spacer = styled.div`
  display: flex;
  width: 5.5rem;
  ${theme.mediaQueries.whenMobileL} {
    width: 2rem;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
  font-size: 0.85rem;
  margin: 0;
  padding: 0.4rem 0.5rem 0.3rem 0.5rem;
  text-transform: none;
  width: auto;
  min-width: 5.5rem;
  span {
    &:last-child {
      flex: 1;
    }
  }
  svg {
    fill: #fff;
  }
  ${theme.mediaQueries.whenMobileL} {
    min-width: auto;
    span {
      &:last-child {
        display: none;
      }
    }
  }
`;

const PaginationNext: React.FC<PaginationNextProps> = ({
  className,
  display,
  onClick,
  children
}) => {
  return display ? (
    <StyledButton className={className} onClick={onClick}>
      <Icon icon="chevronRight" />
      {children}
    </StyledButton>
  ) : (
    <Spacer />
  );
};

export default PaginationNext;
