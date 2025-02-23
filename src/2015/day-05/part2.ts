function isNice(str: string) {
  let hasRepeat = false;
  let hasDoubleWithSeparator = false;

  let current = 0;
  for (let i = 0; i < str.length - 1; i++) {
    const pair = str[i] + str[i + 1];
    current = i + 2;
    for (let j = current; j < str.length - 1; j++) {
      if (str[j] + str[j + 1] === pair) {
        hasRepeat = true;
        break;
      }
    }
  }

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) {
      hasDoubleWithSeparator = true;
      break;
    }
  }

  return hasRepeat && hasDoubleWithSeparator;
}

export function day05p2(input: string): number {
  const strings = input.split('\n');
  let niceStrings = 0;

  for (let str of strings) {
    if (isNice(str)) {
      niceStrings++;
    }
  }

  return niceStrings;
}
