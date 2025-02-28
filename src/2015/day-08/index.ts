import { resolve } from 'path';
import { getInput } from '@/utils/getInput';

import { day08p1 } from './part1';
import { day08p2 } from './part2';

const data = getInput(resolve(__dirname, './data.txt'));

console.info('2015 day08 p1', day08p1(data));
console.info('2015 day08 p2', day08p2(data));
