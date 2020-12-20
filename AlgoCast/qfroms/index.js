// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack = new Stack();
    this.tempStack = new Stack();
  }

  add(el) {
    this.stack.push(el);
  }

  peek() {
    var temp = null;
    while (this.stack.peek() !== undefined) {
      this.tempStack.push(this.stack.pop());
    }
    temp = this.tempStack.peek();
    while (this.tempStack.peek() !== undefined) {
      this.stack.push(this.tempStack.pop());
    }
    return temp;
  }

  remove() {
    var temp = null;
    while (this.stack.peek() !== undefined) {
      this.tempStack.push(this.stack.pop());
    }
    temp = this.tempStack.pop();
    while (this.tempStack.peek() !== undefined) {
      this.stack.push(this.tempStack.pop());
    }
    return temp;
  }
}

module.exports = Queue;
