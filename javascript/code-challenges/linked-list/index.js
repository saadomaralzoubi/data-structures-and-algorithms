"use strict";
const Node = require("./node");
class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  include(value) {
    if (this.head !== null) {
      let currentValue = this.head;
      while (currentValue !== null) {
        if (currentValue.value === value) {
          return true;
        } else {
          currentValue = currentValue.next;
        }
      }
      return false;
    } else {
      return false;
    }
  }
  toString() {
    let nodeString = "";
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        nodeString = nodeString + `{ ${current.value} } -> `;
        current = current.next;
      }
      nodeString = nodeString + "NULL";
      return nodeString;
    } else {
      return "empty Linked List";
    }
  }

  append(value) {
    if (!value) {
      throw new Error("You did not insert value ");
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
      throw new Error("You did not insert value");
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
      throw new Error("error");
    }
  }

  insertAfter(value, newValue) {
    if (!value && newValue) {
      throw new Error("You did not insert value");
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
      throw new Error("error");
    }
  }

  kthFromEnd(k) {
    if (k === null || k < 0) {
      throw new Error("k not found or k is negative value");
    }
    let current = this.head;
    let size = 0;
    while (current !== null) {
      current = current.next;
      size++;
    }

    if (k > size - 1) {
      throw new Error("k bigger than the ll");
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
