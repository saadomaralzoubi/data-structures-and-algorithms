"use strict";

const LinkedList = require("../linked-list.js");

describe("Linked List", () => {
  it("works", () => {
    expect(true).toBeTruthy();
  });
  it("add new item to empty linked list", () => {
    let linkedList = new LinkedList();
    let value = 7;

    linkedList.insert(value);

    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeNull();
  });
  it(" insert into the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(7);
    let newValue = 10;

    linkedList.insert(newValue);

    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next.value).toEqual(7);
  });

  it(" point to the first node in the linked list", () => {
    let linkedList = new LinkedList();
    let head1 = 7;
    let head2 = 8;

    linkedList.insert(head1);
    linkedList.insert(head2);

    expect(linkedList.head.value).toEqual(head2);
  });

  it("insert multiple nodes into the linked list", () => {
    let linkedList = new LinkedList();
    let head1 = 7;
    let head2 = 8;

    linkedList.insert(head1);
    linkedList.insert(head2);
    expect(linkedList.head.value).toEqual(head2);
    expect(linkedList.head.next.value).toEqual(head1);
  });

  it(" return true when finding a value within the linked list that exists", () => {
    let linkedList = new LinkedList();
    let value = 7;

    linkedList.insert(value);

    expect(linkedList.includes(value)).toEqual(true);
  });

  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let linkedList = new LinkedList();
    let value = 7;
    let value2 = 10;

    linkedList.insert(value);

    expect(linkedList.includes(value2)).toEqual(false);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let linkedList = new LinkedList();
    let value = 7;
    let value2 = 10;
    let value3 = 11;

    linkedList.insert(value);
    linkedList.insert(value2);
    linkedList.insert(value3);

    expect(linkedList.toString()).toEqual("{ 11 } -> { 10 } -> { 7 } -> NULL");
  });
  it("Can successfully add a node to the end of the linked list", () => {
    let linkedList = new LinkedList();
    let value = 7;
    let newValue = 10;

    linkedList.insert(value);
    linkedList.append(newValue);

    expect(linkedList.head.next.value).toEqual(newValue);
  });
  it("Can successfully add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedList();
    let value1 = 7;
    let value2 = 10;
    let value3 = 12;

    linkedList.insert(value1);
    linkedList.append(value2);
    linkedList.append(value3);

    expect(linkedList.head.next.next.value).toEqual(value3);
  });

  it("Can successfully insert a node before a node located in the middle of a linked list", () => {
    let linkedList = new LinkedList();
    let value1 = 7;
    let value2 = 10;
    let value3 = 12;
    let value4 = 14;
    let value5 = 16;

    linkedList.insert(value1);
    linkedList.insert(value2);
    linkedList.insert(value3);
    linkedList.insert(value4);
    linkedList.insertBefore(value3, value5);

    expect(linkedList.head.next.value).toEqual(value5);
  });

  it("insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(8);
    linkedList.insertBefore(8, 10);

    expect(linkedList.head.value).toEqual(10);
  });

  it(" insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(2, 4);

    expect(linkedList.toString()).toEqual(
      "{ 3 } -> { 2 } -> { 4 } -> { 1 } -> NULL"
    );
  });

  it(" insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insertAfter(1, 3);

    expect(linkedList.head.next.next.value).toEqual(3);
  });

  it("k is greater than the length of the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x() {
      linkedList.kthFromEnd(4);
    }

    expect(x).toThrow();
  });

  it("k and the length of the list are the same", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x() {
      linkedList.kthFromEnd(3);
    }

    expect(x).toThrow();
  });

  it("k is not a positive integer", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    function x() {
      linkedList.kthFromEnd(-1);
    }

    expect(x).toThrow(" insert  k value or k is negative value");
  });

  it("the linked list is of a size 1", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    let kValue = linkedList.kthFromEnd(0);
    expect(kValue.value).toEqual(1);
  });
  it("should return the value except the end or the beginning", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    let kValue = linkedList.kthFromEnd(2);

    expect(kValue.value).toEqual(3);
  });
});
