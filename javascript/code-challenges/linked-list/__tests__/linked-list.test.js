"use strict";
const LinkedLilst = require("../index");

describe("Linked List", () => {
  it("testing creating LL", () => {
    const LL = new LinkedLilst();
    expect(LL).toBeDefined();
    expect(LL.head).toBeNull();
  });
  it("test node insertion empty LL", () => {
    const LL = new LinkedLilst();
    LL.insert("A");
    expect(LL.head.value).toBe("A");
    expect(LL.head.next).toBeNull();
  });
  it("test node insertion not empty LL", () => {
    const LL = new LinkedLilst();
    LL.insert("A");
    LL.insert("B");
    expect(LL.head.value).toBe("B");
    expect(LL.head.next.value).toBe("A");
    expect(LL.head.next.next).toBeNull();
  });
  it("include method ", () => {
    const LL = new LinkedLilst();
    LL.insert("B");
    LL.insert("A");
    LL.include("A");
    LL.include("B");
    LL.include("c");
    expect(LL.include("A")).toBeTruthy();
    expect(LL.include("B")).toBeTruthy();
    expect(LL.include("c")).toBeFalsy();
  });
  it("toString method", () => {
    const LL = new LinkedLilst();
    LL.insert("c");
    LL.insert("b");
    LL.insert("a");
    expect(LL.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
  });

  it("add a node to the end of the linked list", () => {
    let linkedList = new LinkedLilst();
    let value = 7;
    let newValue = 10;

    linkedList.insert(value);
    linkedList.append(newValue);

    expect(linkedList.head.next.value).toEqual(newValue);
  });
  it("add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedLilst();
    let value1 = 1;
    let value2 = 2;
    let value3 = 3;

    linkedList.insert(value1);
    linkedList.append(value2);
    linkedList.append(value3);

    expect(linkedList.head.next.next.value).toEqual(value3);
  });

  it("insert a node before a node located in the middle of a linked list", () => {
    let linkedList = new LinkedLilst();
    let value1 = 1;
    let value2 = 2;
    let value3 = 3;
    let value4 = 4;
    let value5 = 6;

    linkedList.insert(value1);
    linkedList.insert(value2);
    linkedList.insert(value3);
    linkedList.insert(value4);
    linkedList.insertBefore(value3, value5);

    expect(linkedList.head.next.value).toEqual(value5);
  });

  it(" insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedLilst();

    linkedList.insert("A");
    linkedList.insertBefore("A", "C");

    expect(linkedList.head.value).toEqual("C");
  });

  it(" insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedLilst();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(2, 4);

    expect(linkedList.toString()).toEqual(
      "{ 3 } -> { 2 } -> { 4 } -> { 1 } -> NULL"
    );
  });

  it("insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedLilst();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insertAfter(1, 3);

    expect(linkedList.head.next.next.value).toEqual(3);
  });
});
