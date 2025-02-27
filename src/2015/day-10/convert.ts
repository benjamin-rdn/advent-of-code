export function convert(input: string): string {
  let index = 0;
  let char = input[0];
  let count = 1;
  const result = [];
  while (index < input.length) {
    // incement bedore checking to have undefined on the last iteration and start with the 2nd char
    index++;
    if (input[index] === char) {
      count++;
    } else {
      result.push(count.toString(), char);
      char = input[index];
      count = 1;
    }
  }
  return result.join('');
}
