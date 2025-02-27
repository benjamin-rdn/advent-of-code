export type Vector = { from: string; to: string; distance: number };

export function parseInput(input: string): { cities: Set<string>; vectors: Vector[] } {
  const rawVectors = input.split('\n');
  const cities = new Set<string>();
  const vectors: Vector[] = [];
  rawVectors.forEach((v) => {
    const [from, _1, to, _2, distance] = v.split(' ');
    cities.add(from);
    cities.add(to);
    vectors.push({ from, to, distance: parseInt(distance) });
    vectors.push({ from: to, to: from, distance: parseInt(distance) });
  });
  return { cities, vectors };
}
