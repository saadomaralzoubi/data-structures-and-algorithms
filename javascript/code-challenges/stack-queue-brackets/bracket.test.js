"use strict";

const test = require("./bracket");

describe("test multi Bracket Validation", () => {
  it("return false if  it only opend brackets  ", () => {
    expect(test("({((")).toBeFalsy();
  });

  it("return false if there is a bracket not complete ", () => {
    expect(test("(){}[")).toBeFalsy();
  });

  it("return true if the bracket completed", () => {
    expect(test("(){}[s]")).toBeTruthy();
  });
});
