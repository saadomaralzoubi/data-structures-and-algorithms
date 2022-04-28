"use strict";

function mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergesort(left);
    mergesort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j = j + 1;
      k = k + 1;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i = i + 1;
      k = k + 1;
    }
  }
}

module.exports = mergesort;
