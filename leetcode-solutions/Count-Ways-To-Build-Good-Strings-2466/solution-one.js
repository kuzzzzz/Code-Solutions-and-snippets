/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  let answer = 0;
  const dp = Array(high + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) {
      dp[i] += dp[i - zero];
    }
    if (i >= one) {
      dp[i] += dp[i - one];
    }
    dp[i] %= 10 ** 9 + 7;
    if (i >= low) {
      answer = (answer + dp[i]) % (10 ** 9 + 7);
    }
  }
  return answer;
};
