"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  toString() {
    let node = this.head;
    let stingsArray = [];
    while (node) {
      stingsArray.push(`{ ${node.value} } -> `);
      node = node.next;
    }
    stingsArray.push(`NULL`);
    return stingsArray.join("");
  }

  append(value) {
    if (!value) {
      throw new Error(" value not found");
    }
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    if (!value && newValue) {
      throw new Error("value not found");
    }

    let node = new Node(newValue);

    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          return;
        }
        current = current.next;
      }
      throw new Error("Exception");
    }
  }

  insertAfter(value, newValue) {
    if (!value && newValue) {
      throw new Error("value not found");
    }
    let node = new Node(newValue);
    if (this.head.value === value) {
      this.head.next = node;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          node.next = current.next;
          current.next = node;
          return;
        }
        current = current.next;
      }
      throw new Error("Exception!");
    }
  }

  kthFromEnd(k) {
    if (k === null || k < 0) {
      throw new Error(" insert  k value or k is negative value");
    }
    let current = this.head;
    let size = 0;
    while (current !== null) {
      current = current.next;
      size++;
    }

    if (k > size - 1) {
      throw new Error("k value is greater than the ll size");
    }
    let value = size - k - 1;
    current = this.head;
    while (value !== 0) {
      current = current.next;
      value--;
    }
    return current;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports = LinkedList;
