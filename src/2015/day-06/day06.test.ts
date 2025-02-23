import { day06p1 } from './part1';
import { day06p2 } from './part2';

describe('Day 06 part 1', () => {
  it('shoult return 1000', () => {
    expect(day06p1('turn on 0,0 through 0,999')).toBe(1000);
  });
});

describe('Day 06 part 2', () => {
  it('should return 1000', () => {
    expect(day06p2('turn on 0,0 through 0,999')).toBe(1000);
  });
});
