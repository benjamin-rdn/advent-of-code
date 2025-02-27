import { generateNext } from './generateNext';
import { isValid } from './isValid';

export function day11p1(input: string): string {
  let next = input;

  // If there is no pair of identical chars
  // we can make the next password ends with zz to skip useless iterations
  if (!next.match(/(.)\1/g)) {
    next = next.slice(0, -2) + 'zz';
  }

  do {
    next = generateNext(next);
  } while (!isValid(next));

  return next;
}
