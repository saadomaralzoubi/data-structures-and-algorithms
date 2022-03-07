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
      throw new Error("Exception");
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
      throw new Error("Exception!");
    }
  }
}

module.exports = LinkedList;
