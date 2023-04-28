let hasClassified = new Set();

const numSimilarGroups = (A) => {
  if (A.length < 2) return A.length;
  let result = 0;

  for (let i in A) {
    const word = A[i];
    // if we've already classified this then move to next word
    if (hasClassified.has(word)) continue;
    // if we havent seen this word then we can DFS and see if it fits our criteria
    else {
      result++;
      dfs(A, word);
    }
  }
  return result;
};

const dfs = (A, word) => {
  for (i in A) {
    const otherWord = A[i];
    if (hasClassified.has(otherWord)) continue;

    if (isSimilar(word, otherWord)) {
      hasClassified.add(word);
      hasClassified.add(otherWord);
      dfs(A, otherWord);
    }
  }
};

const isSimilar = (potentialMatch, currentWord) => {
  // we're going to compare the 2 words and see if theres at
  // most a 2 char difference between the two
  let charDifference = 0,
    i = 0;

  while (charDifference <= 2 && i < potentialMatch.length) {
    if (currentWord.charAt(i) !== potentialMatch.charAt(i)) {
      charDifference++;
    }
    i++;
  }
  // if the words are the same we want to return true as well
  return charDifference == 2 || charDifference == 0;
};
