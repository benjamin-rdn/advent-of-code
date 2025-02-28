import { resolve } from 'path';
import { getInput } from '@/utils/getInput';

import { day08p1 } from './part1';
import { day08p2 } from './part2';

describe('2015 day 08 part 1', () => {
  it('should return 12', () => {
    const input = getInput(resolve(__dirname, 'data-example.txt'));
    expect(day08p1(input)).toEqual(12);
  });
});

describe('2015 day 08 part 2', () => {
  it('should return 19', () => {
    const input = getInput(resolve(__dirname, 'data-example.txt'));
    expect(day08p2(input)).toEqual(19);
  });
});
