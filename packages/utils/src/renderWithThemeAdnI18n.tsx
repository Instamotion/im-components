import React from 'react';
import theme from '@insta-ui/theme';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { AvailableLocales, AdditionalTranslation } from './i18n';

export const renderWithThemeAdnI18n = (
  element: JSX.Element,
  locale: AvailableLocales = 'de',
  additionalTranslations: AdditionalTranslation = {}
): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={additionalTranslations[locale]}>
        {element}
      </IntlProvider>
    </ThemeProvider>
  );
};
