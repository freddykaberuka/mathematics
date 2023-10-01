import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should clear the calculator data when "AC" button is pressed', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return an addition of number', () => {
    const result = calculate({ total: '5', next: '3', operation: '+' }, '=');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('should return a subtraction of number', () => {
    const result = calculate({ total: '5', next: '3', operation: '-' }, '=');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });

  it('should return a multiplication of number', () => {
    const result = calculate({ total: '5', next: '3', operation: 'x' }, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should return a division of number', () => {
    const result = calculate({ total: '6', next: '3', operation: '÷' }, '=');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });

  it('should handle numeric buttons', () => {
    const result = calculate({ next: '5' }, '2');
    expect(result).toEqual({
      next: '52',
      total: null,
    });
  });

  it('should handle decimal point', () => {
    const result = calculate({ next: '5', total: null, operation: null }, '.');
    expect(result).toEqual({
      next: '5.',
      total: null,
      operation: null,
    });
  });

  it('should toggle sign (+/-)', () => {
    const result = calculate({ next: '7', total: null, operation: null }, '+/-');
    expect(result).toEqual({
      next: '-7',
      total: null,
      operation: null,
    });
  });
});
