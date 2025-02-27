export function day08p1(input: string): number {
  const nbLines = input.split('\n').length;
  const code = input.length;
  const memory = input
    .replace(/\\"/g, 'X')
    .replace(/\\x[0-9a-f]{2}/g, 'X')
    .replace(/\\\\/g, '\\').length;
  // Raw length - memory length + lines * 2 for the quotes
  return code - memory + nbLines * 2;
}
