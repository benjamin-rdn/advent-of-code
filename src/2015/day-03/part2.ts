export function day03p2(input: string) {
  let position1 = [0, 0];
  let position2 = [0, 0];
  const visited = new Set([JSON.stringify(position1)]);

  for (let moveIndex = 0; moveIndex < input.length; moveIndex++) {
    const p1 = moveIndex % 2 === 0;
    let position = p1 ? position1 : position2;
    const move = input[moveIndex];

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

    if (p1) {
      position1 = position;
    } else {
      position2 = position;
    }
  }

  return visited.size;
}
