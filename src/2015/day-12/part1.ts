export function day12p1(input: string): number {
  const nums = input.match(/-?\d+/g);
  if (!nums) {
    return 0;
  }

  return nums.reduce<number>((sum, curr) => sum + parseInt(curr), 0);
}
