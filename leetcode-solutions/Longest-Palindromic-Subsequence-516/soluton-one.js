const longestPalindromeSubseq = (s) => {
  if (!s) {
    return 0;
  }

  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(1));

  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = s[i] === s[i + 1] ? 2 : 1;
  }

  for (let i = n - 3; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      if (s[i] === s[j]) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1] + 2);
      }
    }
  }

  return dp[0][n - 1];
};
