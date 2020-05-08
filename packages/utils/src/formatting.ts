export const formatEuroCurrency = (val: number, locale = 'de-DE'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR'
  }).format(val);
};

export const formatNumber = (val: number, locale = 'de-DE'): string => {
  return new Intl.NumberFormat(locale, {
    useGrouping: true
  }).format(val);
};
