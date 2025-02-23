export function day03p1(input: string) {
  let position = [0, 0];
  const visited = new Set([JSON.stringify(position)]);

  for (let move of input) {
    let [i, j] = position;
    switch (move) {
      case '^':
        j++;
        break;
      case '>':
        i++;
        break;
      case 'v':
        j--;
        break;
      case '<':
        i--;
        break;
    }

    position = [i, j];
    visited.add(JSON.stringify(position));
  }

  return visited.size;
}
