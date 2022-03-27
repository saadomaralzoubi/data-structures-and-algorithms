let validateBrackets = function (input) {
  let stack = [];
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i]);
    } else {
      let last = stack.pop();

      if (input[i] !== obj[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

module.exports = validateBrackets;
