const minInsertions = (s) => {
  const LEN = s.length;
  const dp = [];
  for (let i = 0; i < LEN; ++i) {
    dp[i] = new Uint16Array(LEN);
    dp[i][i + 1] = s[i] === s[i + 1] ? 0 : 1;
  }
  for (let i = 2; i < s.length; ++i) {
    for (j = 0; j < s.length - i; ++j) {
      dp[j][j + i] =
        s[j] === s[j + i]
          ? dp[j + 1][j + i - 1]
          : 1 + Math.min(dp[j + 1][j + i], dp[j][j + i - 1]);
    }
  }
  return dp[0][s.length - 1];
};
