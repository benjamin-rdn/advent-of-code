import { parseInput, Vector } from './parse-input';

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

const getPermutations = (cities: Set<string>): string[][] => {
  const citiesArray = Array.from(cities);
  const permutations: string[][] = [];

  const permute = (toPermute: string[], permuted: string[] = []) => {
    if (toPermute.length === 0) {
      permutations.push(permuted);
    } else {
      for (let i = 0; i < toPermute.length; i++) {
        let curr = [...toPermute];
        let next = curr.splice(i, 1);
        permute([...curr], permuted.concat(next));
      }
    }
  };

  permute(citiesArray);
  return permutations;
};

export function day09p2(input: string): number {
  const { cities, vectors } = parseInput(input);
  const allPaths = getPermutations(cities);

  return Math.max(...allPaths.map((path) => getDistance(vectors, path)));
}
