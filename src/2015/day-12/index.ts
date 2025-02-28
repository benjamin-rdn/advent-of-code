import { resolve } from 'path';
import { getInput } from '@/utils/getInput';
import { day12p1 } from './part1';
import { day12p2 } from './part2';

const input = getInput(resolve(__dirname, 'data.txt'));
console.info(day12p1(input));
console.info(day12p2(input));
