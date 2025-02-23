export function day01p2(input: string) {
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '(') {
      floor++;
    } else {
      floor--;
    }

    if (floor < 0) {
      return i + 1;
    }
  }
}
