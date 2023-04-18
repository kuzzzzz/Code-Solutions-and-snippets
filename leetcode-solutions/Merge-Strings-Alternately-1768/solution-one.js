var mergeAlternately = function (word1, word2) {
  let f = "";
  let maxLen = Math.max(word1.length, word2.length);

  for (let s = 0; s < maxLen; s++) {
    if (word1[s] && word2[s]) {
      f += word1[s] + word2[s];
    } else if (!word1[s]) {
      f += word2[s];
    } else if (!word2[s]) {
      f += word1[s];
    }
  }
  return f;
};
