import React from 'react';
import styled, { css } from 'styled-components';
import theme from '@im-ui/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';

export interface AccordionItemProps {
  title?: JSX.Element | string;
  open?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, open = false, children }) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemWrapper>
      <AccordionHeader aria-expanded={isOpen} onClick={handleClick}>
        <AccordionTitle>{!!title && title}</AccordionTitle>
        <AccordionIcon icon={faChevronDown} open={isOpen} />
      </AccordionHeader>
      {isOpen && <AccordionItemContent>{children}</AccordionItemContent>}
    </AccordionItemWrapper>
  );
};

export const AccordionItemWrapper = styled.div`
  width: 100%;
  padding: 0;
  ${theme.mediaQueries.whenDesktop} {
    padding: 0;
  }
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-top: 0.0625rem solid ${theme.color.downy};
  border-bottom: 0.0625rem solid ${theme.color.downy};
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 0 0;
  :last-child {
    padding-bottom: 1rem;
  }
  ${theme.mediaQueries.whenDesktop} {
    padding: 1rem 1.5rem 0;
    :last-child {
      padding-bottom: 1rem;
    }
  }
`;

export const AccordionTitle = styled.div`
  color: ${theme.color.brightGrey};
  font-weight: bold;
  font-size: 1rem;
  ${theme.mediaQueries.whenDesktop} {
    font-size: 1.5rem;
  }
`;

export const AccordionIcon = styled(FontAwesomeIcon)<{ open: boolean }>`
  color: ${theme.color.brightGrey};
  user-select: none;
  transform: rotate(-90deg);
  transition: transform 0.3s;
  font-size: 1rem;
  ${theme.mediaQueries.whenDesktop} {
    font-size: 1.5rem;
  }
  ${(props: { open: boolean }) =>
    props.open &&
    css`
      transform: rotate(0);
    `}
`;

export const AccordionItemContent = styled.div`
  padding: 0;
  ${theme.mediaQueries.whenDesktop} {
    padding: 0 1.5rem;
  }
  color: ${theme.color.oil};
`;

export default AccordionItem;
