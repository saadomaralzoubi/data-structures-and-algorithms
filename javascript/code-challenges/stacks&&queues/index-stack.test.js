"use strict";

const { Stack, Queue } = require("./index");

describe("Stack Tests", () => {
  it("Can successfully push  in to a stack", () => {
    let newStack = new Stack();

    newStack.push(1);

    expect(newStack.top.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);

    expect(newStack.top.value).toEqual(2);
  });
  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.pop();

    expect(newStack.top.value).toEqual(1);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let newStack = new Stack();

    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    newStack.pop();

    expect(newStack.size).toEqual(0);
  });

  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();

    newStack.push(100);
    newStack.push(200);
    let peekvalue = newStack.peek();

    expect(peekvalue).toEqual(200);
  });

  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();

    let E = newStack.isEmpty();

    expect(E).toEqual(true);
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    let newStack = new Stack();

    function x() {
      newStack.peek();
    }
    function y() {
      newStack.pop();
    }

    expect(x).toThrow("Cannot read properties of null (reading 'value')");
    expect(y).toThrow("Cannot read properties of null (reading 'next')");
  });
});

describe("Queue Tests", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();

    queue.enqueue(100);

    expect(queue.front.value).toEqual(100);
  });

  it("Can return zipList with same length of two lists", () => {
    let queue = new Queue();

    queue.enqueue(100);
    queue.enqueue(200);

    expect(queue.tail.value).toEqual(200);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();

    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();

    expect(queue.front.value).toEqual("b");
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();

    queue.enqueue(100);
    queue.enqueue(200);
    let x = queue.peek();

    expect(x).toEqual(100);
  });

  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();

    let x = queue.isEmpty();

    expect(x).toEqual(true);
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();

    function x() {
      queue.peek();
    }
    function y() {
      queue.dequeue();
    }

    expect(x).toThrow("Cannot read properties of null (reading 'value')");
    expect(y).toThrow("Cannot read properties of null (reading 'value')");
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();

    queue.enqueue("x");
    queue.enqueue("y");
    queue.dequeue();
    queue.dequeue();

    expect(queue.size).toEqual(0);
  });
});
