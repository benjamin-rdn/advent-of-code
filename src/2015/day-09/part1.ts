import { parseInput, Vector } from './parse-input';

function getShortestDistance(start: string, vectors: Vector[], cities: Set<string>): number {
  const visitedCities = new Set<string>();
  let shortest = 0;
  let currentCity = start;

  while (visitedCities.size < cities.size - 1) {
    const nextVectors = vectors.filter((v) => v.from === currentCity);
    const closestVector = nextVectors.reduce(
      (closest, current) => {
        if (visitedCities.has(current.to)) {
          return closest;
        }
        return current.distance < closest.distance ? current : closest;
      },
      { from: '', to: '', distance: Infinity },
    );

    visitedCities.add(currentCity);
    shortest += closestVector.distance;
    currentCity = closestVector.to;
  }
  return shortest;
}

export function day09p1(input: string): number {
  const { cities, vectors } = parseInput(input);

  let shortestDistance = Infinity;
  for (let city of cities) {
    shortestDistance = Math.min(shortestDistance, getShortestDistance(city, vectors, cities));
  }
  return shortestDistance;
}
