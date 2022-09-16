// dynamic programming solutions
debugger;
function maximumScore(nums, multipliers) {
  const N = nums.length;
  const M = multipliers.length;
  let dp = Array(M)
    .fill(null)
    .map(() => Array(M));
  for (let i = M - 1; i >= 0; i--) {
    for (let left = 0; left <= i; left++) {
      const right = left + N - i;
      dp[left][i] = Math.max(
        (left + 1 < N && i + 1 < M ? dp[left + 1][i + 1] : 0) +
          nums[left] * multipliers[i],
        (i + 1 < M ? dp[left][i + 1] : 0) + nums[right - 1] * multipliers[i]
      );
    }
  }
  console.log(dp[0][0]);
  return dp[0][0];
}

maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]);

// this is a good problem to practise dynamic progtamming try and visualise them
