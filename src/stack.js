const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(x) {
    this.array = [];
    this.index = 0;
  }

  push(element) {
    this.array[this.index] = element;
    this.index++;
  }

  pop() {
    this.index--;
    return this.array[this.index];
  }

  peek() {
    return this.array[this.index - 1];
  }
}

module.exports = {
  Stack
};
