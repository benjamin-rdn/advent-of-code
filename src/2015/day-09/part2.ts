import { parseInput, Vector } from './parse-input';
import { getAllPermutations } from '@/utils';

function getDistance(vectors: Vector[], cities: string[]): number {
  let distance = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    const from = cities[i];
    const to = cities[i + 1];
    const vector = vectors.find((v) => v.from === from && v.to === to);
    if (!vector) {
      throw new Error(`Vector not found from ${from} to ${to}`);
    }
    distance += vector.distance;
  }
  return distance;
}

export function day09p2(input: string): number {
  const { cities, vectors } = parseInput(input);
  const allPaths = getAllPermutations(cities);

  return Math.max(...allPaths.map((path) => getDistance(vectors, path)));
}
