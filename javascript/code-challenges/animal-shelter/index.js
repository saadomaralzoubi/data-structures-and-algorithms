"use strict";
const { Queue } = require("../stacks&&queues/index");

class Shelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }

  enqueue(animal) {
    if (animal.type !== "cat" && animal.type !== "dog") return null;
    if (animal.type === "cat") {
      this.cat.enqueue(animal);
    } else if (animal.type === "dog") {
      this.dog.enqueue(animal);
    }
  }
  dequeue(pref) {
    if (pref !== "cat" && pref !== "dog") return null;
    if (pref === "cat") return this.cat.dequeue();
    else if (pref === "dog") return this.dog.dequeue();
  }
}

module.exports = Shelter;
