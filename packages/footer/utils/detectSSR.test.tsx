import detectSSR from './detectSSR';

describe('detectSSR hook', () => {
  const { isBrowser, isServer } = detectSSR();

  it('detects browser environment', () => {
    expect(isBrowser).toBe(true);
  });

  it('detects server environment', () => {
    expect(isServer).toBe(false);
  });
});
