import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Icon, { AvailableIcons } from '@im-ui/icon';

export interface AccordionItemProps {
  icon?: JSX.Element | AvailableIcons;
  title?: JSX.Element | string;
  open?: boolean;
  clickEvent?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  icon,
  title,
  open = false,
  children,
  clickEvent
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
    clickEvent && clickEvent();
  };

  const leftIcon: JSX.Element | null = useMemo(() => {
    if (typeof icon === 'string') {
      return <Icon icon={icon} color={theme.color.black} />;
    }
    return icon || null;
  }, [icon]);

  return (
    <AccordionItemWrapper>
      <AccordionHeader aria-expanded={isOpen} onClick={handleClick}>
        <IconSection>
          {leftIcon}
          <AccordionTitle>{!!title && title}</AccordionTitle>
        </IconSection>
        <AccordionIcon icon="chevronRight" open={isOpen} />
      </AccordionHeader>
      {isOpen && <AccordionItemContent withIcon={!!leftIcon}>{children}</AccordionItemContent>}
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
  line-height: 1.6;
  color: ${theme.color.typography};

  &:last-child {
    border-bottom: 1px solid ${theme.color.whiteGrey};
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
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

export const AccordionIcon = styled(Icon)<{ open: boolean }>`
  user-select: none;
  transform: rotate(90deg);
  transition: transform 0.3s;
  font-size: 1rem;

  svg {
    font-size: 1rem;
  }

  ${theme.mediaQueries.whenDesktop} {
    font-size: 1.5rem;
  }
  ${(props: { open: boolean }) =>
    props.open &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const AccordionItemContent = styled.div<{ withIcon: boolean }>`
  ${props =>
    props.withIcon ? 'padding: 0 3.25rem 1rem 2.625rem;' : 'padding: 0 3.25rem 1rem 0.625rem;'}
`;

export default AccordionItem;
