import { formatting } from '../src';

const { formatEuroCurrency, formatNumber } = formatting;

/* eslint-env jest */
describe('Formatting', () => {
  it('should format euro currency', () => {
    expect(formatEuroCurrency(100)).toBe('€100.00');
  });

  it('should format number', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  it('should format number in de locale', () => {
    expect(formatNumber(1000, 'de-DE')).toBe('1.000');
  });
});
