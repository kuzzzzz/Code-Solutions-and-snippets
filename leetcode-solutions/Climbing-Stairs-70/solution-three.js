// dynamic programming solution is really impressive
debugger;

function distWays(indx, n, dp) {
  if (indx > n) return 0;
  if (indx === n - 1 || indx === n) return 1;

  if (dp[indx] !== -1) return dp[indx];
  let onestep = distWays(indx + 1, n, dp);
  let twoStep = distWays(indx + 2, n, dp);

  return (dp[indx] = onestep + twoStep);
}

var climbStairs = function (n) {
  let dp = Array(n + 1).fill(-1);
  return distWays(0, n, dp);
};

let test1 = climbStairs(3);
let test2 = climbStairs(4);

console.log(test1, test2);
