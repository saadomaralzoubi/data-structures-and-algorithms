"use strict";

function wordRepeated(str) {
  if (str.length) {
    let words = str.match(/\w+/g);
    let count = {};

    for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();

      if (!count[word]) {
        count[word] = 1;
      } else if (count[word]) {
        count[word]++;
      }
      if (count[word] > 1) {
        return word;
      }
    }
  } else {
    return "No repeated words";
  }
}

module.exports = wordRepeated;
