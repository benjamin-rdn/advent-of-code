import { hash } from 'node:crypto';

export function day04p1(input: string): number {
  let i = 0;
  while (hash('md5', input + i, 'hex').slice(0, 5) !== '00000') {
    i++;
  }
  return i;
}
