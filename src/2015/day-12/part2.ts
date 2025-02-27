import { day12p1 } from './part1';

function getFirstIndex(startIndex: number, str: string): number {
  let firstIndex = startIndex;
  let closed = 0;
  let found = false;
  while (!found) {
    const char = str[firstIndex];
    if (char === '}') {
      closed++;
      firstIndex--;
    } else if (char === '{') {
      if (closed === 0) {
        found = true;
      } else {
        closed--;
        firstIndex--;
      }
    } else {
      firstIndex--;
    }
  }
  return firstIndex;
}

function getLastIndex(startIndex: number, str: string): number {
  let lastIndex = startIndex;
  let opened = 0;
  let found = false;
  while (!found) {
    const char = str[lastIndex];
    if (char === '{') {
      opened++;
      lastIndex++;
    } else if (char === '}') {
      if (opened === 0) {
        found = true;
      } else {
        opened--;
        lastIndex++;
      }
    } else {
      lastIndex++;
    }
  }
  return lastIndex;
}

export function day12p2(input: string): number {
  let cleanup = input;
  let index = input.indexOf(':"red"');
  while (index > -1) {
    const firstIndex = getFirstIndex(index, cleanup);
    const lastIndex = getLastIndex(index, cleanup);

    const toRemove = cleanup.substring(firstIndex, lastIndex + 1);
    cleanup = cleanup.replace(toRemove, '');
    index = cleanup.indexOf(':"red"');
  }
  return day12p1(cleanup);
}
