import { day02p1 } from './part1';
import { day02p2 } from './part2';

describe('day 2 part 1', () => {
  it('should return 54', () => {
    expect(day02p1('2x3x4')).toBe(58);
  });
  it('should return 42', () => {
    expect(day02p1('1x1x10')).toBe(43);
  });
});

describe('day 2 part 2', () => {
  it('should return 34', () => {
    expect(day02p2('2x3x4')).toBe(34);
  });
  it('should return 14', () => {
    expect(day02p2('1x1x10')).toBe(14);
  });
});
