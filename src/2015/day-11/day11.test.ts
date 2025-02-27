import { isValid } from './isValid';
import { generateNext } from './generateNext';
import { day11p1 } from './part1';

describe('day 11 - isValid', () => {
  it.each([
    [false, 'hijklmmn'],
    [false, 'abbceffg'],
    [false, 'abbcegjk'],
    [true, 'abcdffaa'],
    [true, 'ghjaabcc'],
  ])('should return %s for %s', (result, pwd) => {
    expect(isValid(pwd)).toBe(result);
  });
});

describe('day 11 - generateNext', () => {
  it.each([
    ['sdfgfsdg', 'sdfgfsdf'],
    ['sdfgfsea', 'sdfgfsdz'],
  ])('should return %s for %s', (expected, input) => {
    expect(generateNext(input)).toBe(expected);
  });
});

describe('day 11 part 1', () => {
  it.each([
    ['abcdffaa', 'abcdefgh'],
    ['ghjaabcc', 'ghijklmn'],
  ])('should return %s for %s', (next, old) => {
    expect(day11p1(old)).toBe(next);
  });
});
