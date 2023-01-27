var findAllConcatenatedWordsInADict = function (words) {
  const set = new Set(words);
  const res = new Set();
  const f = (pos, s, count) => {
    if (pos >= s.length) {
      if (count >= 2) res.add(s);
      return;
    }

    for (let i = pos; i < s.length; i++) {
      const substr = s.substring(pos, i + 1);
      if (set.has(substr)) {
        f(i + 1, s, count + 1);
      }
    }
  };

  words.forEach((s) => f(0, s, 0));

  return Array.from(res);
};
