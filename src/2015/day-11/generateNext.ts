export function generateNext(pwd: string): string {
  const charCodes: number[] = [];
  for (let i = 0; i < pwd.length; i++) {
    charCodes.push(pwd.charCodeAt(i));
  }

  const a = 97;
  const z = 122;
  // Char codes of i, o and l
  const invalid = [105, 111, 108];

  let currentIndex = charCodes.length - 1;
  let doNext = false;
  do {
    doNext = false;
    let next = charCodes[currentIndex] + 1;
    // skip the forbidden characters
    if (invalid.includes(next)) {
      next++;
    }
    if (next > z) {
      next = a;
      doNext = true;
    }
    charCodes[currentIndex] = next;
    currentIndex--;
  } while (doNext);

  return String.fromCharCode(...charCodes);
}
