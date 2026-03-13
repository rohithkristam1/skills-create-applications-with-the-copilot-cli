#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition: Add two or more numbers together
 * - Subtraction: Subtract numbers from each other
 * - Multiplication: Multiply two or more numbers
 * - Division: Divide numbers with division by zero protection
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Perform addition on multiple operands
 * @param {...number} operands - Numbers to add
 * @returns {number} Sum of all operands
 */
function add(...operands) {
  return operands.reduce((sum, num) => sum + num, 0);
}

/**
 * Perform subtraction on multiple operands
 * @param {...number} operands - First operand minus all subsequent operands
 * @returns {number} Result of subtraction
 */
function subtract(...operands) {
  if (operands.length === 0) return 0;
  return operands.reduce((result, num) => result - num);
}

/**
 * Perform multiplication on multiple operands
 * @param {...number} operands - Numbers to multiply
 * @returns {number} Product of all operands
 */
function multiply(...operands) {
  return operands.reduce((product, num) => product * num, 1);
}

/**
 * Perform division on multiple operands
 * @param {...number} operands - First operand divided by all subsequent operands
 * @returns {number|string} Result of division or error message
 */
function divide(...operands) {
  if (operands.length === 0) return 0;
  
  for (let i = 1; i < operands.length; i++) {
    if (operands[i] === 0) {
      return 'Error: Division by zero is not allowed';
    }
  }
  
  return operands.reduce((result, num) => result / num);
}

/**
 * Calculate the remainder of division (modulo operation)
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number|string} Remainder of a divided by b, or error message
 */
function modulo(a, b) {
  if (b === 0) {
    return 'Error: Division by zero is not allowed';
  }
  return a % b;
}

/**
 * Raise a base to a given exponent (power operation)
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculate the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number|string} Square root of n, or error message for negative numbers
 */
function squareRoot(n) {
  if (n < 0) {
    return 'Error: Cannot calculate square root of a negative number';
  }
  return Math.sqrt(n);
}

/**
 * Parse and execute calculator operations
 * @param {string} input - User input command
 * @returns {string} Result of the operation
 */
function calculate(input) {
  const parts = input.trim().split(/\s+/);
  const operation = parts[0].toLowerCase();
  const operands = parts.slice(1).map(num => parseFloat(num));

  if (operands.some(isNaN)) {
    return 'Error: Invalid operands. Please provide valid numbers.';
  }

  switch (operation) {
    case 'add':
      return `Result: ${add(...operands)}`;
    case 'subtract':
      return `Result: ${subtract(...operands)}`;
    case 'multiply':
      return `Result: ${multiply(...operands)}`;
    case 'divide':
      const divideResult = divide(...operands);
      return typeof divideResult === 'string' ? divideResult : `Result: ${divideResult}`;
    case 'modulo':
      if (operands.length !== 2) {
        return 'Error: Modulo requires exactly two operands (e.g., modulo 10 3)';
      }
      const moduloResult = modulo(operands[0], operands[1]);
      return typeof moduloResult === 'string' ? moduloResult : `Result: ${moduloResult}`;
    case 'power':
      if (operands.length !== 2) {
        return 'Error: Power requires exactly two operands (e.g., power 2 3)';
      }
      return `Result: ${power(operands[0], operands[1])}`;
    case 'sqrt':
      if (operands.length !== 1) {
        return 'Error: Square root requires exactly one operand (e.g., sqrt 16)';
      }
      const sqrtResult = squareRoot(operands[0]);
      return typeof sqrtResult === 'string' ? sqrtResult : `Result: ${sqrtResult}`;
    case 'exit':
    case 'quit':
      return null;
    default:
      return 'Error: Unknown operation. Use add, subtract, multiply, divide, modulo, power, or sqrt.';
  }
}

/**
 * Display welcome message and instructions
 */
function showWelcome() {
  console.log('\n========================================');
  console.log('   Welcome to Node.js CLI Calculator');
  console.log('========================================\n');
  console.log('Available operations:');
  console.log('  add <num1> <num2> [<num3> ...]     - Addition');
  console.log('  subtract <num1> <num2> [<num3> ...] - Subtraction');
  console.log('  multiply <num1> <num2> [<num3> ...] - Multiplication');
  console.log('  divide <num1> <num2> [<num3> ...]   - Division');
  console.log('  modulo <num1> <num2>                - Modulo (remainder)');
  console.log('  power <base> <exponent>             - Exponentiation');
  console.log('  sqrt <num>                          - Square root');
  console.log('  exit or quit                        - Exit calculator\n');
}

/**
 * Start the interactive calculator prompt
 */
function startCalculator() {
  showWelcome();
  
  const promptUser = () => {
    rl.question('calculator> ', (input) => {
      if (input.trim() === '') {
        promptUser();
        return;
      }

      const result = calculate(input);
      
      if (result === null) {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      console.log(result);
      promptUser();
    });
  };

  promptUser();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  startCalculator();
}
