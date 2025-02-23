import { day03p1 } from './part1';
import { day03p2 } from './part2';

describe('day 03 part 1', () => {
  it('should return 2', () => {
    expect(day03p1('>')).toBe(2);
  });
  it('should return 4', () => {
    expect(day03p1('^>v<')).toBe(4);
  });
  it('should return 2', () => {
    expect(day03p1('^v^v^v^v^v')).toBe(2);
  });
});

describe('day 03 part 2', () => {
  it('should return 3', () => {
    expect(day03p2('^v')).toBe(3);
  });
  it('should return 3', () => {
    expect(day03p2('^>v<')).toBe(3);
  });
  it('should return 2', () => {
    expect(day03p2('^v^v^v^v^v')).toBe(11);
  });
});
