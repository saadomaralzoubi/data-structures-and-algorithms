"use strict";

const { Node, KaryTree } = require("../fuzz");

describe("fizzBuzzTree test", () => {
  it("if divisible numbers on 3 should replace with Fizz, divisible numbers on 5 should replace with Buzz and if divisible on both FizzBuzz, and if not replace them with string", () => {
    let one = new Node(1);
    let two = new Node(9);
    let three = new Node(10);
    let four = new Node(2);
    let five = new Node(3);
    let six = new Node(5);
    let seven = new Node(15);
    let eight = new Node(11);
    let nine = new Node(8);

    one.children = [two, three, four];
    two.children = [five];
    three.children = [six, seven];
    five.children = [eight];
    six.children = [nine];

    let kAryTree = new KaryTree(one);
    let newKAryTree = new KaryTree();

    newKAryTree.fizzBuzzTree(kAryTree);

    expect(newKAryTree.root.children[0].value).toEqual("Fizz");
    expect(newKAryTree.root.children[1].children[0].value).toEqual("Buzz");
    expect(newKAryTree.root.children[1].children[1].value).toEqual("FizzBuzz");
    expect(newKAryTree.root.children[0].children[0].children[0].value).toEqual(
      "not divisible by 3 or 5"
    );
  });
});
