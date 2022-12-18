var dailyTemperatures = function (T) {
  let stack = [];
  let res = new Array(T.length);
  for (let i = T.length - 1; i >= 0; i--) {
    while (T[i] >= T[stack[stack.length - 1]]) stack.pop();
    if (stack.length == 0) res[i] = 0;
    else res[i] = stack[stack.length - 1] - i;
    stack.push(i);
  }
  return res;
};
