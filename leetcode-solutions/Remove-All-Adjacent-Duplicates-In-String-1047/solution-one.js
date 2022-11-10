var removeDuplicates = function (s) {
  const stack = [""];

  for (let c of s) {
    let top = stack[stack.length - 1];
    if (top == c) stack.pop();
    else stack.push(c);
  }
  return stack.join("");
};

// This question is identical to the make the string great question 