/**
 * Comprehensive Unit Tests for Node.js CLI Calculator
 * 
 * Tests all four basic arithmetic operations with multiple test cases
 * including edge cases and error handling.
 */

const { add, subtract, multiply, divide } = require('../calculator.js');

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
});
