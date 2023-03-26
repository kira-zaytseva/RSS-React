import { validateName, validateBirthday } from './validation';

describe('validation', () => {
  test('returns true for valid birthdays', () => {
    expect(validateBirthday('1990-01-01')).toBe(true);
    expect(validateBirthday('2022-12-31')).toBe(true);
  });

  test('returns false for invalid birthdays', () => {
    expect(validateBirthday('2023-01-01')).toBe(false);
    expect(validateBirthday('1990-01-32')).toBe(false);
    expect(validateBirthday('90-01-01')).toBe(false);
  });
});

describe('validateName', () => {
  test('returns true for valid names', () => {
    expect(validateName('Samantha Smith')).toBe(true);
    expect(validateName('Ann Ivanova')).toBe(true);
  });

  test('returns false for invalid names', () => {
    expect(validateName('J')).toBe(false);
    expect(validateName('John ')).toBe(false);
    expect(validateName('JohnDoe')).toBe(false);
    expect(validateName('')).toBe(false);
  });
});
