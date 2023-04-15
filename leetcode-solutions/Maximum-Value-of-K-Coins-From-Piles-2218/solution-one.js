var maxValueOfCoins = function (piles, k) {
  let n = piles.length,
    dp = Array(n)
      .fill(0)
      .map(() => Array(k + 1).fill(-1));
  return dfs(0, k);

  function dfs(idx, k) {
    if (idx === n || k === 0) return 0;
    if (dp[idx][k] !== -1) return dp[idx][k];
    let sum = 0;
    for (let j = 0; j <= Math.min(k, piles[idx].length); j++) {
      dp[idx][k] = Math.max(dp[idx][k], dfs(idx + 1, k - j) + sum);
      if (j < piles[idx].length) sum += piles[idx][j];
    }
    return dp[idx][k];
  }
};
