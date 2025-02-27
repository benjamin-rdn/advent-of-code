export function day08p2(input: string): number {
  const nbLines = input.split('\n').length;
  const code = input.length;
  const encoded = input.replace(/\\/g, '\\\\').replace(/"/g, '\\"').length;
  return encoded - code + nbLines * 2;
}
