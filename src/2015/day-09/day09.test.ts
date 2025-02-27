import { resolve } from 'path';
import { getInput } from '../utils/getInput';

import { day09p1 } from './part1';
import { day09p2 } from './part2';

describe('2015 day 09 part 1', () => {
  it('should return 12', () => {
    const input = getInput(resolve(__dirname, 'data-example.txt'));
    expect(day09p1(input)).toEqual(605);
  });
});

describe('2015 day 09 part 2', () => {
  it('should return 982', () => {
    const input = getInput(resolve(__dirname, 'data-example.txt'));
    expect(day09p2(input)).toEqual(982);
  });
});
