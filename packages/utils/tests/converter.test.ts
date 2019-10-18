import { converter } from '../src';

describe('Converting', () => {
  it('should convert kw to hp', () => {
    expect(converter.kilowattsToHorsePower(44)).toBe(60);
  });
});
