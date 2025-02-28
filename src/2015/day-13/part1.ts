import { parseInput, Relation } from './parse-input';
import { getAllPermutations } from '@/utils';

function getRelationValue(relations: Relation[], p1: string, p2: string): number {
  const relation = relations.find((r) => (r.p1 === p1 && r.p2 === p2) || (r.p2 === p1 && r.p1 === p2))!;
  return relation.value;
}

export function day13p1(input: string): number {
  const [people, relations] = parseInput(input);
  const permutations = getAllPermutations(people);
  let maxValue = -Infinity;
  for (const plan of permutations) {
    let value = getRelationValue(relations, plan.at(0)!, plan.at(-1)!);
    for (let i = 0; i < plan.length - 1; i++) {
      value += getRelationValue(relations, plan[i], plan[i + 1]);
    }
    maxValue = Math.max(maxValue, value);
  }
  return maxValue;
}
