function profitableSchemes(n, minProfit, group, profit) {
  // set 2D array with `n` and `minProfit`
  let dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0));

  // set first of O(2) is 1
  dp.forEach((c) => (c[0] = 1));

  // 3 Loops - :P
  for (let i = 0; i < group.length; i++) {
    for (let j = n; j >= group[i]; j--) {
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] =
          (dp[j][k] + dp[j - group[i]][Math.max(0, k - profit[i])]) % (1e9 + 7);
      }
    }
  }

  // Answer
  return dp[n][minProfit];
}
