"use strict";

const Node = require("../node.js");
const { BinaryTree, BinarySearchTree } = require("../tree.js");

let tree = null;

describe(" Binary Tree ", () => {
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

    tree = new BinaryTree(one);
  });

  it("Should successfully instantiate an empty tree", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it("Should successfully instantiate a tree with a single root node", () => {
    const one = new Node(1);
    const tree = new BinaryTree(one);
    expect(tree.root.value).toBe(1);
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    expect(postOrderResult).toEqual(expected);
  });

  it("Can successfully finad a maximum value ", () => {
    expect(tree.findMaximum()).toEqual(9);
  });

  it("return null if the tree is empty  ", () => {
    let newtree = new BinaryTree();
    expect(newtree.findMaximum()).toBeNull();
  });
});

describe("Binary Search Tree ", () => {
  it("Can successfully instantiate an empty tree", () => {
    let binaryTree = new BinarySearchTree();
    expect(binaryTree.root).toBeNull();
  });

  it("Can successfully instantiate a tree with a single root node", () => {
    let value = 6;
    let root = new Node(value);

    let binaryTree = new BinarySearchTree(root);
    expect(binaryTree.root.value).toEqual(value);
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    let value = 8;
    let root = new Node(value);
    let binaryTree = new BinarySearchTree(root);
    const left = 3;
    const right = 12;
    binaryTree.add(left);
    binaryTree.add(right);
    expect(binaryTree.root.left.value).toEqual(left);
    expect(binaryTree.root.right.value).toEqual(right);
  });
});
