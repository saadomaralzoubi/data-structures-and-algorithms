"use strict";

const stack = require("./index");

describe("testing the pseudoQueue class", () => {
  const psuedo = new stack();
  it("testing the new instace of stackQueue", () => {
    expect(psuedo).toBeInstanceOf(stack);
  });
  it("testing queue method", () => {
    psuedo.enqueue("1");
    psuedo.enqueue("2");
    psuedo.enqueue("3");
    psuedo.enqueue("4");

    expect(psuedo.stack2.top.value).toBe("4");
    expect(psuedo.stack2.top).toBeNull();
  });
  it("testing queue method", () => {
    psuedo.dequeue();
    psuedo.dequeue();
    psuedo.dequeue();
    psuedo.dequeue();
    expect(psuedo.stack2.top.value).toBe("1");
    expect(psuedo.stack1.isEmpty).toBeTruthy;
  });
});
