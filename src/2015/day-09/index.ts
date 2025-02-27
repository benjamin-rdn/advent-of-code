import { resolve } from 'path';
import { getInput } from '../utils/getInput';

import { day09p1 } from './part1';
import { day09p2 } from './part2';

const data = getInput(resolve(__dirname, 'data.txt'));

console.info('2015 day09 p1', day09p1(data));
console.info('2015 day09 p2', day09p2(data));
