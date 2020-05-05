import { formatting } from '../src';

const { formatEuroCurrency, formatNumber } = formatting;

/* eslint-env jest */
describe('Formatting', () => {
  it('should format euro currency with default locale (de)', () => {
    expect(formatEuroCurrency(100, 'en-EN')).toBe('€100.00');
  });

  it('should format number', () => {
    expect(formatNumber(1000)).toBe('1.000');
  });

  it('should format number in de locale', () => {
    expect(formatNumber(1000, 'de-DE')).toBe('1.000');
  });

  it('should format number in en locale', () => {
    expect(formatNumber(1000, 'en-EN')).toBe('1,000');
  });
});
