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
}

module.exports = LinkedList;
