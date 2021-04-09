import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Icon from '@im-ui/icon';

interface AccordionProps {
  open?: boolean;
  title?: string;
  getTrackingEvent?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  open = false,
  title,
  children,
  getTrackingEvent = () => {}
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const handleClick = (): void => {
    getTrackingEvent();
    setIsOpen(!isOpen);
  };

  return (
    <ListItem>
      <Expand aria-expanded={isOpen} onClick={handleClick}>
        <AccordionTitle>{!!title && title}</AccordionTitle>
        <AccordionIcon icon="down" isOpen={isOpen} />
      </Expand>
      {isOpen && <AccordionContentWrapper>{children}</AccordionContentWrapper>}
    </ListItem>
  );
};

const ListItem = styled.div`
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

export const Expand = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.875rem 1rem 1.875rem 1.5rem;
`;

export const AccordionTitle = styled.div`
  color: ${theme.color.brightGrey};
  font-weight: bold;
`;

const AccordionIcon = styled(Icon)<{ isOpen: boolean }>`
  color: ${theme.color.brightGrey};
  transform: rotate(-90deg);
  transition: transform 0.3s;
  ${(props: { isOpen: boolean }) =>
    props.isOpen &&
    `
      transform: rotate(0);
    `}
`;

export const AccordionContentWrapper = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  color: ${theme.color.oil};
`;

export default Accordion;
