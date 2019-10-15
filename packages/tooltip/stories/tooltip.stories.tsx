import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Tooltip, { TooltipProps } from '../src';
import Icon from '@im-ui/icon';

const story = storiesOf('Tooltip', module);

story.addDecorator(withKnobs);

story.add('with icon', () => {
  const props: TooltipProps = {
    icon: <Icon iconName="infoCircle" />
  };

  return (
    <Tooltip {...props}>
      {text(
        'Tooltip Text',
        'Effektiver Jahreszins: 3,99 %, Sollzinssatz (p. a. gebunden für die gesamte Laufzeit): 3,92 %, Nettodarlehensbetrag: 11.083,00 € inkl. Zulassungs- und Zustellkosten (449,00 €), Schlussrate: 9.802,20 €, Gesamtrückzahlungsbetrag: 12.826,20 €. Hierbei handelt es sich um ein repräsentatives Beispiel gem. § 6a PAngV. Ein freibleibendes Angebot der Bank11 für Privatkunden und Handel GmbH, Hammer Landstraße 91, 41460 Neuss für die das Autohaus Instamotion Retail GmbH, Erika-Mann-Straße 23, 80636 München als ungebundener Vermittler beratend tätig ist. Bitte beachte, dass wir eine Bonitäts-Anfrage stellen werden. Alle Preise verstehen sich inkl. MwSt. Irrtümer vorbehalten.'
      )}
    </Tooltip>
  );
});

story.add('with text', () => {
  const props: TooltipProps = {
    icon: <h3>Hover for Tooltip *</h3>
  };

  return (
    <Tooltip {...props}>
      {text(
        'Tooltip Text',
        'Effektiver Jahreszins: 3,99 %, Sollzinssatz (p. a. gebunden für die gesamte Laufzeit): 3,92 %, Nettodarlehensbetrag: 11.083,00 € inkl. Zulassungs- und Zustellkosten (449,00 €), Schlussrate: 9.802,20 €, Gesamtrückzahlungsbetrag: 12.826,20 €. Hierbei handelt es sich um ein repräsentatives Beispiel gem. § 6a PAngV. Ein freibleibendes Angebot der Bank11 für Privatkunden und Handel GmbH, Hammer Landstraße 91, 41460 Neuss für die das Autohaus Instamotion Retail GmbH, Erika-Mann-Straße 23, 80636 München als ungebundener Vermittler beratend tätig ist. Bitte beachte, dass wir eine Bonitäts-Anfrage stellen werden. Alle Preise verstehen sich inkl. MwSt. Irrtümer vorbehalten.'
      )}
    </Tooltip>
  );
});
