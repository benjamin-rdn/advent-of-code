export type Operator = 'AND' | 'OR' | 'LSHIFT' | 'RSHIFT' | 'NOT' | 'VALUE';
export type Operation = {
  operator: Operator;
  left?: string | number;
  right?: string | number;
  value?: string | number;
};
