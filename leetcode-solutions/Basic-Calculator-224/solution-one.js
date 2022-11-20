var calculate = function (s) {
  let num = 0;
  let res = 0;
  let sign = 1;

  const stack = [sign];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === " ") continue;

    if (ch === "+" || ch === "-") {
      res += sign * num;
      sign = stack[stack.length - 1] * (ch === "+" ? 1 : -1);
      num = 0;
    } else if (ch === "(") {
      stack.push(sign);
    } else if (ch === ")") {
      stack.pop();
    } else {
      num = num * 10 + parseInt(ch);
    }
  }

  res += sign * num;
  return res;
};
