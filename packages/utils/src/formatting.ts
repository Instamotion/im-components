export const formatEuroCurrency = (val: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
  }).format(val);
};

export const formatNumber = (val: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    useGrouping: true
  }).format(val);
};
