import { convert } from './convert';

export function day10p1(input: string): number {
  let result = input;
  for (let i = 0; i < 40; i++) {
    result = convert(result);
  }
  return result.length;
}
