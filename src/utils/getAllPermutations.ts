export function getAllPermutations(str: Set<string>): string[][] {
  const strArray = Array.from(str);
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

  permute(strArray);
  return permutations;
}
