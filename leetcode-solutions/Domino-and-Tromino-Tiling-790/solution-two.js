debugger;
const MOD = 1e9 + 7;
const dp = [[0, 0, 0, 1]];
/**
 * @param {number} n
 * @return {number}
 */
const numTilings = (n) => {
  for (let i = dp.length; i <= n; ++i) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][3];
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][3] =
      (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % MOD;
  }
  return dp[n][3];
};
let test1 = numTilings(4);
console.log(test1);
