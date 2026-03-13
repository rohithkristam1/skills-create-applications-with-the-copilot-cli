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
    case 'exit':
    case 'quit':
      return null;
    default:
      return 'Error: Unknown operation. Use add, subtract, multiply, or divide.';
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

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  startCalculator();
}
