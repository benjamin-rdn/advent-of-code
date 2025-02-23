export function day02p1(input: string): number {
  const packages = input.split('\n');
  return packages.reduce((total: number, present: string) => {
    const [l, w, h] = present.split('x').map((s) => parseInt(s));
    const s1 = l * w;
    const s2 = w * h;
    const s3 = h * l;
    const slack = Math.min(s1, s2, s3);
    return total + 2 * (s1 + s2 + s3) + slack;
  }, 0);
}
