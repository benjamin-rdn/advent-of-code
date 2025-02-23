import { Operation } from './types';

export function resolveSignal(resolved: Map<string, number>, [wire, operation]: [string, Operation]): void {
  const strValue = operation.value as string;
  switch (operation.operator) {
    case 'VALUE':
      resolved.set(wire, resolved.get(strValue)!);
      break;

    case 'NOT':
      const resolvedValue = resolved.get(strValue)!;
      resolved.set(wire, ~resolvedValue & 0xffff);
      break;

    case 'AND':
      if (typeof operation.left === 'number') {
        resolved.set(wire, operation.left & resolved.get(operation.right as string)!);
      } else {
        const resolvedLeft = resolved.get(operation.left as string)!;
        const resolvedRight = resolved.get(operation.right as string)!;
        resolved.set(wire, resolvedLeft & resolvedRight);
      }
      break;

    case 'OR':
      resolved.set(wire, resolved.get(operation.left as string)! | resolved.get(operation.right as string)!);
      break;

    case 'LSHIFT':
      resolved.set(wire, resolved.get(operation.left as string)! << (operation.right as number));
      break;

    case 'RSHIFT':
      resolved.set(wire, resolved.get(operation.left as string)! >> (operation.right as number));
      break;

    default:
      break;
  }
}
