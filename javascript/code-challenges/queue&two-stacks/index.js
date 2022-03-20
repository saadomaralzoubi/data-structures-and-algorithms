"use strict";
const { stack } = require("../stacks&&queues/index");

class pseudo {
  constructor() {
    this.stack1 = new stack();
    this.stack2 = new stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack1.top === null) {
      return "exception(The stack is Empty)";
    } else {
      this.stack2.push(this.stack1.top.value);
      this.stack1.pop();
    }
  }
}
module.exports = pseudo;
