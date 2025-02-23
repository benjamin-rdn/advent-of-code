import { LedGroup, parseGroup } from './parseLedGroup';

function makeGrid(): number[][] {
  const grid: number[][] = [];
  for (let i = 0; i < 1000; i++) {
    grid.push(new Array(1000).fill(0));
  }
  return grid;
}

function turnOn(grid: number[][], group: LedGroup): void {
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      grid[i][j]++;
    }
  }
}

function toggle(grid: number[][], group: LedGroup): void {
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      grid[i][j] += 2;
    }
  }
}

function turnOff(grid: number[][], group: LedGroup): void {
  for (let i = group.startX; i <= group.endX; i++) {
    for (let j = group.startY; j <= group.endY; j++) {
      if (grid[i][j] > 0) {
        grid[i][j]--;
      }
    }
  }
}

function sumGridValues(grid: number[][]): number {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      sum += grid[i][j];
    }
  }
  return sum;
}

export function day06p2(input: string): number {
  const instructions = input.split('\n');
  const grid = makeGrid();

  for (let instruction of instructions) {
    if (instruction.startsWith('turn on')) {
      turnOn(grid, parseGroup(instruction, 'turn on'));
    }

    if (instruction.startsWith('toggle')) {
      toggle(grid, parseGroup(instruction, 'toggle'));
    }

    if (instruction.startsWith('turn off')) {
      turnOff(grid, parseGroup(instruction, 'turn off'));
    }
  }
  return sumGridValues(grid);
}
