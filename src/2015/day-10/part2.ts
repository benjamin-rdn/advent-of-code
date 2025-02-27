import { convert } from './convert';

export function day10p2(input: string): number {
  let result = input;
  for (let i = 0; i < 50; i++) {
    result = convert(result);
  }
  return result.length;
}
