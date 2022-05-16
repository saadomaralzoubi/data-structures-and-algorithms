"use strict";

const wordRepeated = require("./repeat");

describe("Repeated Word Test", () => {
  it("if it was empty string", () => {
    let str = "";

    let expected = wordRepeated(str);

    expect(expected).toEqual("No repeated words");
  });

  it("should find the first word to occur more than once in a string", () => {
    let str = "Once upon a time, there was a brave princess who...";

    let expected = wordRepeated(str);

    expect(expected).toEqual("a");
  });
});
