/* eslint-disable sonarjs/cognitive-complexity */
export function day05p1(input: string): number {
  const neededChars = ['a', 'e', 'i', 'o', 'u'];
  const forbiddenStrings = ['ab', 'cd', 'pq', 'xy'];

  const strings = input.split('\n');
  let niceSrings = 0;

  for (const str of strings) {
    let vowelsCount = 0;
    let doubleLetter = false;
    let containsForbiddenStrings = false;

    for (let i = 1; i < str.length; i++) {
      if (forbiddenStrings.includes(str[i - 1] + str[i])) {
        containsForbiddenStrings = true;
        break;
      }
      if (str[i] === str[i - 1]) {
        doubleLetter = true;
      }
      if (neededChars.includes(str[i - 1])) {
        vowelsCount++;
      }
    }
    if (neededChars.includes(str.at(-1) as string)) {
      vowelsCount++;
    }

    if (vowelsCount >= 3 && doubleLetter && !containsForbiddenStrings) {
      niceSrings++;
    }
  }

  return niceSrings;
}
