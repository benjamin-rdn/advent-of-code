export type LedGroup = { startX: number; startY: number; endX: number; endY: number };

export function parseGroup(instruction: string, instructionType: 'turn on' | 'toggle' | 'turn off'): LedGroup {
  instruction = instruction.replace(instructionType + ' ', '');
  instruction = instruction.replace(' through', '');
  const [start, end] = instruction.split(' ');
  const [startX, startY] = start.split(',');
  const [endX, endY] = end.split(',');

  return { startX: parseInt(startX), startY: parseInt(startY), endX: parseInt(endX), endY: parseInt(endY) };
}
