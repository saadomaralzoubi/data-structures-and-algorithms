"use strict";

const treeIntersection = require("./tree");

const { BinaryTree } = require("../trees/tree");
const Node = require("../trees/node");

let tree1 = null;
let tree2 = null;

describe("Binary Tree", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree1 = new BinaryTree(one);

    let eleven = new Node(11);
    two = new Node(2);
    three = new Node(3);
    let twelve = new Node(12);
    five = new Node(5);
    let thirteen = new Node(13);
    seven = new Node(7);
    let fourteen = new Node(14);
    nine = new Node(9);

    eleven.left = two;
    eleven.right = three;
    two.left = five;
    twelve.right = seven;
    seven.left = thirteen;
    seven.right = fourteen;
    three.left = nine;

    tree2 = new BinaryTree(eleven);
  });

  it("1- Can successfully give the whole nodes in the  same tree", () => {
    let x = treeIntersection(tree1, tree1);

    expect(x).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
  });
  it("2- return the intersection of two different trees ", () => {
    let x = treeIntersection(tree1, tree2);

    expect(x).toEqual([2]);
  });
  it("3- throw an error when there is no input", () => {
    let x = function () {
      treeIntersection();
    };
    expect(x).toThrow("No input");
  });
});
