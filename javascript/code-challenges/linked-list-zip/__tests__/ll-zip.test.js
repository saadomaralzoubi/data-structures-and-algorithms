"use strict";
const LinkedList = require("../../linked-list/index");
const zipLists = require("../index-zip");

describe("linked-lists-zip", () => {
  it(" return zipList with same length of two lists", () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.insert(10);
    ll1.insert(1);
    ll2.insert(4);
    ll2.insert(5);

    let x = zipLists(ll1, ll2);

    expect(x.toString()).toEqual("{ 1 } -> { 5 } -> { 10 } -> { 4 } -> NULL");
  });
  it(" return zipList with different length of two lists ll1<ll2", () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.insert(10);
    ll1.insert(1);
    ll2.insert(4);
    ll2.insert(5);
    ll2.insert(7);

    let x = zipLists(ll1, ll2);

    expect(x.toString()).toEqual(
      "{ 1 } -> { 7 } -> { 10 } -> { 5 } -> { 4 } -> NULL"
    );
  });
  it(" return zipList with different length of two lists ll1>ll2", () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.insert(10);
    ll1.insert(1);
    ll1.insert(4);
    ll2.insert(5);
    ll2.insert(7);

    let x = zipLists(ll1, ll2);

    expect(x.toString()).toEqual(
      "{ 4 } -> { 7 } -> { 1 } -> { 5 } -> { 10 } -> NULL"
    );
  });
  it("should throw an error with empty linked list", () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();

    function x() {
      zipLists(ll1, ll2);
    }

    expect(x).toThrow(" no linked list entered here");
  });
});
