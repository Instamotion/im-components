import React from 'react';
import { storiesOf } from '@storybook/react';
import { renderWithThemeAndI18n } from '@im-ui/utils';

import Faq, { FaqProps } from '../src';

storiesOf('Faq', module).add('Default', () => {
  const props: FaqProps = {
    faqSections: [
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
        open: true,
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
    ]
  };

  return renderWithThemeAndI18n(<Faq {...props} />);
});
