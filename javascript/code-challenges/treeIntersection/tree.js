"use strict";

function treeIntersection(tree1, tree2) {

  let arr = [];

  if (!tree1 && !tree2) {
    throw new Error("No input");
  }

  const firstBinary = tree1.preOrder();
  const secondBinary = tree2.preOrder();


  for (let i = 0; i < firstBinary.length; i++) {
    if (firstBinary[i] === secondBinary[i]) {
      arr.push(firstBinary[i]);
    }
  }
  return arr;
}

module.exports = treeIntersection;
