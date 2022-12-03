var frequencySort = function (s) {
  let charMap = new Map();

  for (let v of s) {
    if (charMap.has(v)) {
      charMap.set(v, charMap.get(v) + 1);
    } else {
      charMap.set(v, 1);
    }
  }

  let sortchaMap = new Map(
    [...charMap.entries()].sort().sort((a, b) => b[1] - a[1])
  );

  let output = "";

  for (let [x, y] of sortchaMap) {
    output += x.repeat(y);
  }

  return output;
};
