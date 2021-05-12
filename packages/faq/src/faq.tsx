import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Accordion from './accordion';

const AccordionWrapper = styled.div`
  line-height: 1.5rem;

  & > div {
    border-top: none;
    border-bottom: none;
    background-color: ${theme.color.lightBackground};

    & > div {
      padding: 1.1875rem 1rem 1.1875rem 1.5rem;
    }

    & > :nth-of-type(2) {
      background-color: ${theme.color.white};
    }
  }

  div {
    flex: 1;
    border-radius: 0.25rem;
    color: ${theme.color.oil};
    font-weight: 400;
    font-size: ${theme.fontSize.normal}rem;
    font-family: BentonSans;
  }

  p {
    color: ${theme.color.oil};
    white-space: break-spaces;
  }

  svg {
    margin-left: 0.5rem;
    color: ${theme.color.oil};
  }
`;

const SectionTitle = styled.h2`
  margin: 3.75rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${theme.color.typo};
  text-align: center;
  font-family: BentonSans;
  ${theme.mediaQueries.whenDesktop} {
    text-align: left;
    font-size: 2.5rem;
  }
`;
const FaqSection = styled.div`
  margin: 0 auto;
  max-width: 67.25rem;
  padding: 0 2rem 2.5rem;
  ${theme.mediaQueries.whenDesktopXL} {
    min-width: 67.25rem;
  }
`;

export interface FaqSection {
  title: string;
  text: string;
  open?: boolean;
}

export interface FaqProps {
  faqSections: FaqSection[];
  getTrackingEvent?: (n: number) => void;
}

const FAQ: React.FC<FaqProps> = ({ getTrackingEvent = () => {}, faqSections }) => (
  <FaqSection>
    <SectionTitle>Häufige Fragen</SectionTitle>
    <AccordionWrapper>
      {faqSections &&
        faqSections.length &&
        faqSections.map((item: FaqSection, i: number) => (
          <Accordion
            key={`item-${item.title}`}
            title={item.title}
            getTrackingEvent={() => getTrackingEvent(i + 1)}
            open={item.open ? item.open : false}
          >
            <p>{item.text}</p>
          </Accordion>
        ))}
    </AccordionWrapper>
  </FaqSection>
);

export default FAQ;
