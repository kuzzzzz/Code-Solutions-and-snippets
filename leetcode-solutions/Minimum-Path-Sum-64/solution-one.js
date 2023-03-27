
var minPathSum = function (grid) {
  var rows = grid.length,
    cols = grid[0].length,
    p = new Array(rows),
    sum = 0,
    i = 0,
    j = 0;
  for (; i < rows; i++) {
    p[i] = new Array(cols);
    sum += grid[i][0];
    p[i][0] = sum;
  }
  for (i = 0, sum = 0; i < cols; i++) {
    sum += grid[0][i];
    p[0][i] = sum;
  }
  for (i = 1; i < rows; i++) {
    for (j = 1; j < cols; j++) {
      if (p[i - 1][j] > p[i][j - 1]) {
        p[i][j] = grid[i][j] + p[i][j - 1];
      } else {
        p[i][j] = grid[i][j] + p[i - 1][j];
      }
    }
  }
  return p[rows - 1][cols - 1];
};
