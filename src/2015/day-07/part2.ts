import { parseOperation } from './parse-operation';
import { resolveSignal } from './resolve-signal';
import { Operation } from './types';

export function day07p2(input: string): number {
  const raw = input.split('\n').map((signal) => signal.split(' -> '));
  const signals = new Map<string, Operation>();
  for (const [operation, wire] of raw) {
    signals.set(wire, parseOperation(operation));
  }

  signals.set('b', parseOperation('16076'));

  // Initialize resolved wires with known values
  const resolvedWire = new Map<string, number>();
  signals
    .entries()
    .filter(([_wire, operation]) => operation.operator === 'VALUE' && typeof operation.value === 'number')
    .forEach(([wire, operation]) => resolvedWire.set(wire, operation.value as number));

  while (!resolvedWire.has('a')) {
    const resolvableWires = signals.entries().filter(([wire, operation]) => {
      if (resolvedWire.has(wire)) {
        return false;
      }
      if (operation.operator === 'VALUE' && resolvedWire.has(operation.value!.toString())) {
        return true;
      }
      if (operation.operator === 'NOT' && resolvedWire.has(operation.value!.toString())) {
        return true;
      }
      if (operation.operator === 'AND' || operation.operator === 'OR') {
        if (typeof operation.left === 'number' && resolvedWire.has(operation.right!.toString())) {
          return true;
        }
        if (resolvedWire.has(operation.left!.toString()) && resolvedWire.has(operation.right!.toString())) {
          return true;
        }
      }
      if (operation.operator === 'LSHIFT' || operation.operator === 'RSHIFT') {
        if (resolvedWire.has(operation.left!.toString())) {
          return true;
        }
      }
      return false;
    });

    for (const [wire, operation] of resolvableWires) {
      resolveSignal(resolvedWire, [wire, operation]);
    }
  }

  return resolvedWire.get('a')!;
}
