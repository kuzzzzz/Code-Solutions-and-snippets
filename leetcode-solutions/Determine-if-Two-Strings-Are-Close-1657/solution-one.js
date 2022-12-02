function getSortedItems(word) {
  const group = {};

  for (let c of word) {
    group[c] = (group[c] || 0) + 1;
  }

  return {
    keys: Object.keys(group).sort(),
    counts: Object.values(group).sort((a, b) => a - b),
  };
}

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const group1 = getSortedItems(word1);
  const group2 = getSortedItems(word2);

  for (let i = 0; i < group1.keys.length; i++) {
    if (
      group1.keys[i] !== group2.keys[i] ||
      group1.counts[i] !== group2.counts[i]
    ) {
      return false;
    }
  }

  return true;
};
