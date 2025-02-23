import { Operation } from './types';

export function parseOperation(operation: string): Operation {
  const split = operation.split(' ');
  if (split.length === 3) {
    const [left, operator, right] = operation.split(' ');
    const parsedRight = parseInt(right);
    const parsedLeft = parseInt(left);
    return {
      operator: operator as 'AND' | 'OR' | 'LSHIFT' | 'RSHIFT',
      left: isNaN(parsedLeft) ? left : parsedLeft,
      right: isNaN(parsedRight) ? right : parsedRight,
    };
  } else if (split.length === 2) {
    const [_operator, value] = operation.split(' ');
    return {
      operator: 'NOT',
      value,
    };
  } else {
    const value = parseInt(operation);
    return {
      operator: 'VALUE',
      value: isNaN(value) ? operation : value,
    };
  }
}
