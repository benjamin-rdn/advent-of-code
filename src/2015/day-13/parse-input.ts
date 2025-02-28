export type Relation = { p1: string; p2: string; value: number };

export function parseInput(input: string): [Set<string>, Relation[]] {
  const rows = input.split('\n');
  const uniquePeople = new Set<string>();
  const allRelations: Relation[] = rows.map((r) => {
    const [p1, operation, value, p2] = r
      .replace('.', '')
      .replace('would ', '')
      .replace('happiness units by sitting next to ', '')
      .split(' ');
    const val = parseInt(value, 10);
    uniquePeople.add(p1);
    uniquePeople.add(p2);
    return {
      p1,
      p2,
      value: operation === 'gain' ? val : -val,
    };
  });

  const mergedRelations: Relation[] = [];

  const people = Array.from(uniquePeople);
  for (let i = 0; i < uniquePeople.size; i++) {
    const [p] = people.splice(0, 1);
    for (let other of people) {
      const relation1 = allRelations.find((r) => r.p1 === p && r.p2 === other)!;
      const relation2 = allRelations.find((r) => r.p1 === other && r.p2 === p)!;
      mergedRelations.push({ p1: p, p2: other, value: relation1.value + relation2.value });
    }
  }

  return [uniquePeople, mergedRelations];
}
