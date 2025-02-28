import { resolve } from 'path';
import { getInput } from '@/utils/getInput';

import { day13p1 } from './part1';
import { day13p2 } from './part2';

const input = getInput(resolve(__dirname, 'data.txt'));

console.info('2015 day13 p1', day13p1(input));
console.info('2015 day13 p2', day13p2(input));
