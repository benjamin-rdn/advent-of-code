import { readFileSync } from 'fs';

export function getInput(path: string): string {
  // Read the file and remove the last newline character
  return readFileSync(path).toString().slice(0, -1);
}
