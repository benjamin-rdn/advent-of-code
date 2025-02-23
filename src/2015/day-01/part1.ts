export function day01p1(input: string): number {
  return input.split('').reduce((acc, cur) => (cur === '(' ? acc + 1 : acc - 1), 0);
}
