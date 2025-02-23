export function day02p2(input: string): number {
  const packages = input.split('\n');
  return packages.reduce((total: number, present: string) => {
    const pack = present
      .split('x')
      .map((s) => parseInt(s))
      .sort((a, b) => a - b);

    const perimeter = 2 * (pack[0] + pack[1]);
    const bow = pack.reduce((size, border) => size * border, 1);
    return total + perimeter + bow;
  }, 0);
}
