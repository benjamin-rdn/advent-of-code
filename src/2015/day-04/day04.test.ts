import { day04p1 } from './part1';

describe('Day 04 part 1', () => {
  it('should return 609043', () => {
    expect(day04p1('abcdef')).toBe(609043);
  });
  it('should return 1048970', () => {
    expect(day04p1('pqrstuv')).toBe(1048970);
  });
});
