import { convert } from './convert';

describe('Day 10', () => {
  it.each([
    ['1', '11'],
    ['11', '21'],
    ['21', '1211'],
    ['1211', '111221'],
    ['111221', '312211'],
  ])('convert %s to %s', (input, expected) => {
    expect(convert(input)).toBe(expected);
  });
});
