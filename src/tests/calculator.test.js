/**
 * Comprehensive Unit Tests for Node.js CLI Calculator
 * 
 * Tests all four basic arithmetic operations with multiple test cases
 * including edge cases and error handling.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator.js');

describe('Calculator - Addition', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add multiple numbers', () => {
    expect(add(1, 2, 3, 4, 5)).toBe(15);
  });

  test('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  test('should add negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-5, 10)).toBe(5);
  });

  test('should add decimal numbers', () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should add with no operands', () => {
    expect(add()).toBe(0);
  });

  test('should add single number', () => {
    expect(add(42)).toBe(42);
  });

  test('should add large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

describe('Calculator - Subtraction', () => {
  test('should subtract two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should subtract multiple numbers', () => {
    expect(subtract(20, 5, 3, 2)).toBe(10);
  });

  test('should handle zero', () => {
    expect(subtract(5, 0)).toBe(5);
    expect(subtract(0, 5)).toBe(-5);
  });

  test('should subtract negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
    expect(subtract(10, -5)).toBe(15);
  });

  test('should subtract decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
    expect(subtract(1.1, 0.1)).toBeCloseTo(1);
  });

  test('should handle result of zero', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test('should subtract with no operands', () => {
    expect(subtract()).toBe(0);
  });

  test('should subtract single number', () => {
    expect(subtract(42)).toBe(42);
  });

  test('should produce negative results', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  test('should subtract large numbers', () => {
    expect(subtract(1000000, 500000)).toBe(500000);
  });
});

describe('Calculator - Multiplication', () => {
  test('should multiply two positive numbers', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should multiply multiple numbers', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('should handle zero', () => {
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  test('should multiply negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-5, 4)).toBe(-20);
  });

  test('should multiply decimal numbers', () => {
    expect(multiply(2.5, 2)).toBe(5);
    expect(multiply(0.1, 10)).toBeCloseTo(1);
  });

  test('should handle one as operand', () => {
    expect(multiply(1, 42)).toBe(42);
    expect(multiply(1, 1)).toBe(1);
  });

  test('should multiply with no operands', () => {
    expect(multiply()).toBe(1);
  });

  test('should multiply single number', () => {
    expect(multiply(42)).toBe(42);
  });

  test('should produce correct results with multiple operands', () => {
    expect(multiply(2, 3, 5)).toBe(30);
  });

  test('should multiply large numbers', () => {
    expect(multiply(1000, 2000)).toBe(2000000);
  });
});

describe('Calculator - Division', () => {
  test('should divide two positive numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should divide with decimal result', () => {
    expect(divide(10, 4)).toBe(2.5);
    expect(divide(1, 3)).toBeCloseTo(0.333, 2);
  });

  test('should divide multiple numbers', () => {
    expect(divide(100, 2, 5)).toBe(10);
  });

  test('should handle zero dividend', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('should return error message for division by zero', () => {
    expect(divide(10, 0)).toBe('Error: Division by zero is not allowed');
  });

  test('should return error for division by zero in multiple operands', () => {
    expect(divide(100, 5, 0)).toBe('Error: Division by zero is not allowed');
  });

  test('should divide negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
    expect(divide(-20, -4)).toBe(5);
  });

  test('should divide decimal numbers', () => {
    expect(divide(5.5, 1.1)).toBeCloseTo(5);
  });

  test('should divide with no operands', () => {
    expect(divide()).toBe(0);
  });

  test('should divide single number', () => {
    expect(divide(42)).toBe(42);
  });

  test('should produce fractional results', () => {
    expect(divide(1, 2)).toBe(0.5);
  });

  test('should divide large numbers', () => {
    expect(divide(1000000, 1000)).toBe(1000);
  });
});

describe('Calculator - Modulo', () => {
  test('should calculate modulo of two positive numbers', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should match example: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should handle zero dividend', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('should return error for division by zero', () => {
    expect(modulo(10, 0)).toBe('Error: Division by zero is not allowed');
  });

  test('should calculate modulo with negative numbers', () => {
    expect(modulo(-10, 3)).toBe(-1);
    expect(modulo(10, -3)).toBe(1);
  });

  test('should calculate modulo resulting in zero', () => {
    expect(modulo(10, 5)).toBe(0);
    expect(modulo(20, 4)).toBe(0);
  });

  test('should calculate modulo with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBe(1.5);
  });

  test('should calculate modulo with large numbers', () => {
    expect(modulo(100, 7)).toBe(2);
    expect(modulo(1000000, 3)).toBe(1);
  });
});

describe('Calculator - Power', () => {
  test('should raise base to positive exponent', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should match example: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should handle zero exponent', () => {
    expect(power(5, 0)).toBe(1);
    expect(power(100, 0)).toBe(1);
  });

  test('should raise to power of one', () => {
    expect(power(5, 1)).toBe(5);
    expect(power(42, 1)).toBe(42);
  });

  test('should handle base of zero', () => {
    expect(power(0, 3)).toBe(0);
    expect(power(0, 5)).toBe(0);
  });

  test('should handle base of one', () => {
    expect(power(1, 100)).toBe(1);
    expect(power(1, 0)).toBe(1);
  });

  test('should raise negative base to powers', () => {
    expect(power(-2, 3)).toBe(-8);
    expect(power(-2, 4)).toBe(16);
  });

  test('should handle negative exponent', () => {
    expect(power(2, -1)).toBe(0.5);
    expect(power(10, -2)).toBe(0.01);
  });

  test('should handle decimal base and exponent', () => {
    expect(power(2.5, 2)).toBe(6.25);
    expect(power(4, 0.5)).toBe(2);
  });

  test('should calculate large powers', () => {
    expect(power(10, 2)).toBe(100);
    expect(power(2, 10)).toBe(1024);
  });

  test('should calculate fractional results', () => {
    expect(power(5, 2)).toBe(25);
    expect(power(3, 3)).toBe(27);
  });
});

describe('Calculator - Square Root', () => {
  test('should calculate square root of perfect squares', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should match example: √16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should calculate square root of various numbers', () => {
    expect(squareRoot(25)).toBe(5);
    expect(squareRoot(9)).toBe(3);
    expect(squareRoot(1)).toBe(1);
  });

  test('should handle square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('should calculate square root of non-perfect squares', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    expect(squareRoot(10)).toBeCloseTo(3.162, 3);
  });

  test('should return error for negative numbers', () => {
    expect(squareRoot(-1)).toBe('Error: Cannot calculate square root of a negative number');
    expect(squareRoot(-4)).toBe('Error: Cannot calculate square root of a negative number');
    expect(squareRoot(-100)).toBe('Error: Cannot calculate square root of a negative number');
  });

  test('should calculate square root of decimal numbers', () => {
    expect(squareRoot(2.25)).toBe(1.5);
    expect(squareRoot(6.25)).toBe(2.5);
  });

  test('should calculate square root of large numbers', () => {
    expect(squareRoot(1000000)).toBe(1000);
    expect(squareRoot(10000)).toBe(100);
  });

  test('should handle square root of fractions', () => {
    expect(squareRoot(0.25)).toBe(0.5);
    expect(squareRoot(0.01)).toBe(0.1);
  });
});

describe('Calculator - Integration Tests', () => {
  test('should match example: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should match example: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('should match example: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('should match example: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('should match extended operation example: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('should match extended operation example: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('should match extended operation example: √16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('should handle complex calculation: (100 / 5) * 2 = 40', () => {
    const step1 = divide(100, 5);
    const step2 = multiply(step1, 2);
    expect(step2).toBe(40);
  });

  test('should handle mixed operations', () => {
    const sum = add(5, 3);
    const product = multiply(sum, 2);
    expect(product).toBe(16);
  });

  test('should combine advanced operations: power result in modulo', () => {
    const powerResult = power(2, 5);
    const moduloResult = modulo(powerResult, 3);
    expect(moduloResult).toBe(2);
  });

  test('should combine operations: square root of power', () => {
    const powerResult = power(5, 2);
    const sqrtResult = squareRoot(powerResult);
    expect(sqrtResult).toBe(5);
  });

  test('should chain multiple operations', () => {
    const sum = add(1, 3);
    const power_result = power(sum, 2);
    const modulo_result = modulo(power_result, 7);
    expect(modulo_result).toBe(2);
  });
});
