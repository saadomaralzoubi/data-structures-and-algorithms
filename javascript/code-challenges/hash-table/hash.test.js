"use strict";

const HashTable = require("./hash");

test("Adding a key/value to your hashtable results in the value being in the data structure", () => {
  let hashTable = new HashTable();
  hashTable.set("student", "saad");
  let index = hashTable.hash("student");
  expect(hashTable.table[index].head.value.key).toEqual("student");
});

test("Retrieving based on a key returns the value stored", () => {
  let hashTable = new HashTable();
  hashTable.set("student", "saad");
  const value = hashTable.get("student");
  expect(value.head.value.key).toEqual("student");
});

test("Successfully returns null for a key that does not exist in the hashtable", () => {
  let hashTable = new HashTable();
  const value = hashTable.get("student");
  expect(value).toBeNull();
});

test("Successfully handle a collision within the hashtable", () => {
  let hashTable = new HashTable();
  hashTable.set("student", "saad");
  hashTable.set("student", "saed");
  const value = hashTable.get("student");
  expect(value.head.next.value.value).toEqual("saed");
});

test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
  let hashTable = new HashTable();
  hashTable.set("student", "saad");
  hashTable.set("student", "saed");
  const value = hashTable.get("student");
  console.log(value.head.next);
  expect(value.head.next.value.value).toEqual("saed");
});

test("Successfully hash a key to an in-range value", () => {
  let hashTable = new HashTable();
  hashTable.set("student", "saad");
  const value = hashTable.hash("student");
  expect(value).toBeLessThan(50);
});
