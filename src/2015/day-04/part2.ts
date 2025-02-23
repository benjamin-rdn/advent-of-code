import { hash } from 'node:crypto';

export function day04p2(input: string): number {
  let i = 254575;
  while (hash('md5', input + i, 'hex').slice(0, 6) !== '000000') {
    i++;
  }
  return i;
}
