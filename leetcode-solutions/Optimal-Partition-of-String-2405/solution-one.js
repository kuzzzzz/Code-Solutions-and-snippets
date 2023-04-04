const partitionString = (s, count = 1, map = new Map()) => {
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      count++;
      map = new Map();
    }
    map.set(s[i], 1);
  }
  return count;
};
