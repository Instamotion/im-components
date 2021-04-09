import React from 'react';
import styled from 'styled-components';
import { IMTheme as theme } from '@im-ui/theme';
import Accordion from './accordion';

const AccordionWrapper = styled.div`
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
    padding-bottom: 0rem;
    min-width: 67.25rem;
  }
`;

const faqSections = [
  {
    title: 'Kann man den Preis verhandeln?',
    text:
      'Unsere Preise bieten keinen Verhandlungsspielraum. Es sind die günstigsten Preise, die wir anbieten können. Aufgrund unseres großen Servicepakets kann es durchaus vorkommen, dass Du bei einem Händler vor Ort einen günstigeren Preis findest.'
  },
  {
    title: 'Kann ich das Auto vor dem Kauf Probe fahren oder besichtigen?',
    text:
      'Vor dem Kauf ist eine Probefahrt nicht möglich. Du bestellst den Gebrauchtwagen bei uns und bekommst ihn vor die Haustür geliefert. Jetzt hast Du die Möglichkeit Deinen neuen Gebrauchtwagen probe zu fahren und ihn bei Nichtgefallen innerhalb von zwei Wochen an uns zurück zu geben.'
  },
  {
    title: 'Wie lange ist die Lieferzeit meines neuen Gebrauchtwagens?',
    text:
      'Wenn in der Produktbeschreibung nicht Abweichendes angeben wird, beträgt die Lieferzeit maximal 15 Werktage. Bei der Bezahlart "Vorkasse" beginnt die Lieferfrist am Bankarbeitstag nach dem Tag, an dem der Zahlungseingang erfolgt ist.'
  },
  {
    title: 'Was kosten mich Registrierung und Lieferung?',
    text:
      'Die Registrierung kostet pauschal 150 EUR, das Wunschkennzeichen 25 EUR und die Lieferung deutschlandweit 299 EUR. \n\nZulassung bei Barkauf: Wir lassen Deinen neuen Gebrauchtwagen gerne auf dich zu. Sofern du dich für eine Finanzierung bei unserer Partnerbank Bank11 entscheidest, ist der Betrag in Höhe von 150,00 € bereits inklusive. Entscheidest du dich für den Barkauf, müssen wir dir die 150,00 € separat berechnen. Das wird dir auf der Rechnung natürlich vermerkt. \n\nLieferung bei Barkauf: Wir liefern Dir dein Fahrzeug ganz bequem und stressfrei direkt vor die Haustür. Hierzu sprechen wir einen Termin mit dir ab, damit du dein neues Wunschfahrzeug persönlich in Empfang nehmen kannst. Die Lieferung wird mit einer einmaligen Zahlung von 299,00 € berechnet. Bei einer Finanzierung ist der Betrag aber bereits im Preis inbegriffen und wird nicht separat berechnet. Bei einem Barkauf hingegen müssen wird den Betrag in Höhe von 299,00 € aber berechnen und auf der Rechnung ausweisen.\n\nWunschkennzeichen: Gerne können wir Deinen Gebrauchtwagen auf dein Wunschkennzeichen zulassen. Für diese Serviceleistung berechnen wir dir aber 25,00 €.'
  },
  {
    title: 'Legitimierung – was sind meine Optionen?',
    text: `1. Fast Lane über Web-ID: Du erhältst per E-Mail einen Link von unserer Partnerbank, Bank11, unter dem Du per Web-ID die Überprüfung Deiner Identität vornimmst. In diesem Rahmen liest Du Dir den Finanzierungsvertrag online durch und stimmst einem Kontocheck durch die Bank zu. Der Prozess dauert nicht mehr als 20 Minuten und schließt die Finanzierungsanfrage ab.\n\n2. Klassisch über den Postweg: alternativ schicken wir dir eine E-Mail mit dem vorausgefülltem Finanzierungsvertrag, der abweichenden Auszahlungsanweisung und einer Liste an notwendigen Unterlagen, die wir benötigen: - Einkommensnachweise der letzten 2 Monate - Scan des Personalausweises (beidseitig) - evtl. Scan der Aufenthaltsbestätigung (dann auch Scan des Reisepasses) - unterschriebener Scan der Abweichenden Auszahlungsanweisung und des Finanzierungsvertrages. Solltest Du Dich für die klassische Variante entscheiden, müssen die bei uns eingegangenen Unterlagen nach Eingang überprüft werden. Erst dann erfolgt die Finanzierungsfreigabe, wodurch sich der Kauf noch einige Zeit verzögern kann. In beiden Fällen brauchen wir den unterschriebenen Finanzierungsvertrag im Original per Post.`
  }
];

export type AccordionItemType = {
  title: string;
  text: string | JSX.Element;
};

export interface FaqSection {
  title: string;
  text: string;
}

export interface FaqProps {
  items?: AccordionItemType[];
  faqSections: FaqSection[];
  getTrackingEvent?: (n: number) => void;
}

const FAQ: React.FC<FaqProps> = ({ getTrackingEvent = () => {}, faqSections }) => (
  <FaqSection>
    <SectionTitle>FAQ</SectionTitle>
    <AccordionWrapper>
      {faqSections &&
        faqSections.length &&
        faqSections.map((item: FaqSection, i: number) => (
          <Accordion
            key={`item-${item.title}`}
            title={item.title}
            getTrackingEvent={() => getTrackingEvent(i + 1)}
          >
            <p>{item.text}</p>
          </Accordion>
        ))}
    </AccordionWrapper>
  </FaqSection>
);

export default FAQ;
