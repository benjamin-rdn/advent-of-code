import { resolve } from 'path';
import { getInput } from '@/utils/getInput';
import { day12p1 } from './part1';
import { day12p2 } from './part2';

const input = getInput(resolve(__dirname, 'data.txt'));
console.info('2015 day12 p1', day12p1(input));
console.info('2015 day12 p2', day12p2(input));
