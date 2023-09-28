import operate from '../logic/operate';

describe('operate', () => {
  it('should return a sum of two numbers', () => {
    const result = operate('5', '3', '+');
    expect(result).toBe('8');
  });

  it('should return a difference of two numbers', () => {
    const result = operate('5', '3', '-');
    expect(result).toBe('2');
  });

  it('should return a product of two numbers', () => {
    const result = operate(5, 3, 'x');
    expect(result).toBe('15');
  });
  it('should return a quotient of two numbers', () => {
    const result = operate(6, 3, '÷');
    expect(result).toBe('2');
  });

  it('should return a modulus of division', () => {
    const result = operate("4","7",'%');
    expect(result).toBe('4');
  })
});
