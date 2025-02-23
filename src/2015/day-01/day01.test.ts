import { day01p1 } from './part1';
import { day01p2 } from './part2';

describe('day01 part 1', () => {
  it('should return 0 for input ""', () => {
    expect(day01p1('')).toBe(0);
  });

  it('should return 0 for input "()"', () => {
    expect(day01p1('()')).toBe(0);
  });

  it('should return 0 for input "(())"', () => {
    expect(day01p1('(())')).toBe(0);
  });

  it('should return 0 for input "()()"', () => {
    expect(day01p1('()()')).toBe(0);
  });

  it('should return 3 for input "((("', () => {
    expect(day01p1('(((')).toBe(3);
  });

  it('should return -2 for input "))()"', () => {
    expect(day01p1('))()')).toBe(-2);
  });

  it('should return -1 for input "())"', () => {
    expect(day01p1('())')).toBe(-1);
  });
});

describe('day01 part 2', () => {
  it('should return 1', () => {
    expect(day01p2(')')).toBe(1);
  })
  it('should return 5', () => {
    expect(day01p2('()())')).toBe(5);
  })
})
