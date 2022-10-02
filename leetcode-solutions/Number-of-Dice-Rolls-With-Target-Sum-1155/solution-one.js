var numRollsToTarget = function (n, k, target) {
  let memo = [];
  return dp(n, target, []) % 1000000007n;
  function dp(n, target, arr) {
    if (memo[n] !== undefined && memo[n][target] !== undefined) {
      return memo[n][target];
    }
    if (n === 1) {
      if (target > 0 && target <= k) {
        //console.log(arr)
        return 1n;
      } else {
        return 0n;
      }
    }
    if (n <= 0) {
      return 0n;
    }
    let sum = 0n;
    for (let i = 1; i <= k; i++) {
      if (target - i < 0) {
        break;
      }
      sum += dp(n - 1, target - i, [...arr, i]);
      sum = sum % 1000000007n;
    }
    if (memo[n] === undefined) {
      memo[n] = [];
    }
    memo[n][target] = sum;
    return sum;
  }
};
