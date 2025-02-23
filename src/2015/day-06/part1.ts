import { LedGroup, parseGroup } from './parseLedGroup';

function makeGrid(): boolean[][] {
  const grid: boolean[][] = [];
  for (let i = 0; i < 1000; i++) {
    grid.push(new Array(1000).fill(false));
  }
  return grid;
}

function turnOn(grid: boolean[][], group: LedGroup): number {
  let count = 0;
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      if (grid[i][j] === false) {
        grid[i][j] = true;
        count++;
      }
    }
  }
  return count;
}

function toggle(grid: boolean[][], group: LedGroup): number {
  let count = 0;
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      if (grid[i][j] === true) {
        grid[i][j] = false;
        count--;
      } else {
        grid[i][j] = true;
        count++;
      }
    }
  }
  return count;
}

function turnOff(grid: boolean[][], group: LedGroup): number {
  let count = 0;
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      if (grid[i][j] === true) {
        grid[i][j] = false;
        count--;
      }
    }
  }
  return count;
}

export function day06p1(input: string): number {
  const instructions = input.split('\n');
  const grid = makeGrid();

  let litCount = 0;
  for (let instruction of instructions) {
    if (instruction.startsWith('turn on')) {
      litCount += turnOn(grid, parseGroup(instruction, 'turn on'));
    }

    if (instruction.startsWith('toggle')) {
      litCount += toggle(grid, parseGroup(instruction, 'toggle'));
    }

    if (instruction.startsWith('turn off')) {
      litCount += turnOff(grid, parseGroup(instruction, 'turn off'));
    }
  }
  return litCount;
}
