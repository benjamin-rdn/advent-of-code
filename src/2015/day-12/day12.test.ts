import { day12p1 } from './part1';
import { day12p2 } from './part2';

describe('day 12 part 1', () => {
  it('should return 6', () => {
    expect(day12p1('{"a":2,"b":4}')).toBe(6);
    expect(day12p1('[1,2,3]')).toBe(6);
  });

  it('should return 3', () => {
    expect(day12p1('[[[3]]]')).toBe(3);
    expect(day12p1('{"a":{"b":4},"c":-1')).toBe(3);
  });
  it('should return 0', () => {
    expect(day12p1('{"a":[-1,1]}')).toBe(0);
    expect(day12p1('[-1,{"a":1}]')).toBe(0);
    expect(day12p1('[]')).toBe(0);
    expect(day12p1('{}')).toBe(0);
  });
});

describe('day 12 part 2', () => {
  it('should work', () => {
    expect(day12p2('{"a":2,"b":4}')).toBe(6);
    expect(day12p2('[1,2,3]')).toBe(6);
    expect(day12p2('[1,{"c":"red","b":2},3]')).toBe(4);
    expect(day12p2('{"d":"red","e":[1,2,3,4],"f":5}')).toBe(0);
    expect(day12p1('[1,"red",5]')).toBe(6);
  });
});
