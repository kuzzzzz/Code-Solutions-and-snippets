var removeStars = function(s) {
  s = s.split("").reverse();
  let stack = [], n = s.length;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '*') stack.pop();
    else stack.push(s[i]);
  }
  return stack.join("");
};