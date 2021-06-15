import React from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import Icon, { AvailableIcons } from '@im-ui/icon';

export interface AccordionItemProps {
  icon?: JSX.Element | AvailableIcons;
  title?: JSX.Element | string;
  open?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ icon, title, open = false, children }) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  const getIcon = () => {
    if (typeof icon === 'string') {
      return <Icon icon={icon} color={theme.color.black} />;
    }
    return icon;
  };

  return (
    <AccordionItemWrapper>
      <AccordionHeader aria-expanded={isOpen} onClick={handleClick}>
        <IconSection>
          {getIcon()}
          <AccordionTitle>{!!title && title}</AccordionTitle>
        </IconSection>
        <AccordionIcon icon={faChevronDown} open={isOpen} />
      </AccordionHeader>
      {isOpen && <AccordionItemContent>{children}</AccordionItemContent>}
    </AccordionItemWrapper>
  );
};

export const AccordionItemWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid ${theme.color.whiteGrey};
  font-family: ${theme.font.bentonMedium.family};
  font-weight: ${theme.font.bentonMedium.weight};
  font-size: 0.875rem;
  color: ${theme.color.typography};

  &:last-child {
    border-bottom: 1px solid ${theme.color.whiteGrey};
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 2.25rem 1rem 0.625rem;
`;

export const IconSection = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 1rem;
  }
`;

export const AccordionTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

export const AccordionIcon = styled(FontAwesomeIcon)<{ open: boolean }>`
  user-select: none;
  transform: rotate(0);
  transition: transform 0.3s;
  font-size: 1rem;
  ${theme.mediaQueries.whenDesktop} {
    font-size: 1.5rem;
  }
  ${(props: { open: boolean }) =>
    props.open &&
    css`
      transform: rotate(-180deg);
    `}
`;

export const AccordionItemContent = styled.div`
  padding: 0 2.25rem 0 0.625rem;
`;

export default AccordionItem;
