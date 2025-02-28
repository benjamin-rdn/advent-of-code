import { resolve } from 'path';
import { getInput } from '../../utils/getInput';
import { day13p1 } from './part1';

describe('day 13 part 1', () => {
  it('should return 330', () => {
    const input = getInput(resolve(__dirname, 'data-example.txt'));
    expect(day13p1(input)).toBe(330);
  });
});
