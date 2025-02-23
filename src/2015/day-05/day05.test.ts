import { day05p1 } from './part1';
import { day05p2 } from './part2';

describe('Day 05 part 1', () => {
  it('should return 2', () => {
    const strings = `ugknbfddgicrmopn
aaa
jchzalrnumimnmhp
haegwjzuvuyypxyu
dvszwmarrgswjxmb`;
    expect(day05p1(strings)).toBe(2);
  });
});

describe('Day 05 part 2', () => {
  it('should return 2', () => {
    const strings = `qjhvhtzxzqqjkmpb
xxyxx
uurcxstgmygtbstg
ieodomkazucvgmuy`;
    expect(day05p2(strings)).toBe(2);
  });
});
