var evalRPN = function (s) {
  let stack = [];

  for (let c of s) {
    if (c == "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (c == "-") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(b - a);
    } else if (c == "/") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(parseInt(b / a));
    } else if (c == "*") {
      stack.push(stack.pop() * stack.pop());
    } else {
      stack.push(parseInt(c));
    }
  }
  return stack[0];
};
