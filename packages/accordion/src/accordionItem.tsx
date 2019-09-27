import React, { SyntheticEvent } from 'react';
import styled, { css } from 'styled-components';

export const AccordionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.2px;
`;

export const AccordionContent = styled.div`
  display: none;
  padding: 0 1.2rem 0.6rem;
`;

export const AngleIcon = styled.span`
  display: flex;
  height: 0.5rem;
  width: 1rem;
  position: relative;
  color: #007d63;
  transform: rotate(-90deg);
  &::before {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(-45deg);
    right: 0.7rem;
    background-color: #007d63;
  }
  &::after {
    content: '';
    width: 0.0625rem;
    height: 0.5rem;
    position: absolute;
    transform: rotate(45deg);
    right: 0.35rem;
    background-color: #007d63;
  }
`;

export const Expand = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  cursor: pointer;
  padding: 1.3rem 1.2rem;
`;

export interface AccordionItemProps {
  className?: string;
  title?: string;
  open?: boolean;
  renderExpando?: any;
  onHeadingClick?: any;
  'data-open'?: boolean;
}

export const ListItem = styled.div<AccordionItemProps>`
  border-top: 0.2rem solid #e8e8e8;

  &:last-child {
    border-bottom: 0.2rem solid #e8e8e8;
  }

  ${props =>
    props['data-open'] &&
    css`
    overflow: visible;

    ${AngleIcon} {
      transform: none;
    }
    ${AccordionContent} {
      display: block;
  `}
`;

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  open = false,
  onHeadingClick
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const [prevIsOpen, setPrevIsOpen] = React.useState(open);

  const handleOnChange = (e: SyntheticEvent): void => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
    if (onHeadingClick) {
      onHeadingClick({ isOpen: nextValue, e });
    }
  };

  if (open !== prevIsOpen) {
    setIsOpen(open);
    setPrevIsOpen(open);
  }

  return (
    <ListItem
      data-open={isOpen}
      className={`accordion__item ${isOpen ? 'accordion__item--active' : ''}`}
    >
      <Expand className="accordion__heading" aria-expanded={isOpen} onClick={handleOnChange}>
        <AccordionTitle>{title}</AccordionTitle>
        <AngleIcon />
      </Expand>
      <AccordionContent>{children}</AccordionContent>
    </ListItem>
  );
};
