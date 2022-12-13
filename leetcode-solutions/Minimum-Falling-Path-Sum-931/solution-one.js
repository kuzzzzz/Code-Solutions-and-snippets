debugger;
var minFallingPathSum = function (matrix) {
  const ROW = matrix.length,
    COL = matrix[0].length;
  const dp = [...Array(ROW + 1)].map(() => Array(COL + 2).fill(Infinity));
  dp[ROW] = Array(COL + 2).fill(0);

  for (let r = ROW - 1; r >= 0; r--) {
    for (let c = 1; c <= COL; c++) {
      dp[r][c] =
        Math.min(dp[r + 1][c - 1], dp[r + 1][c], dp[r + 1][c + 1]) +
        matrix[r][c - 1];
    }
  }
  return Math.min(...dp[0]);
};

// Test  case
let test1 = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];

let res = minFallingPathSum(test1);

console.log(res);
