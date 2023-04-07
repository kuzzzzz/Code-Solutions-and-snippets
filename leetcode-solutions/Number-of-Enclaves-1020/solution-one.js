var numEnclaves = function (grid) {
  const n = grid.length,
    m = grid[0].length;
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i > n - 1 || j > m - 1 || grid[i][j] != 1) return;
    grid[i][j] = 0;
    for (let d of DIRECTIONS) dfs(i + d[0], j + d[1]);
  };

  //first we iterate through boundaries and set to 0 all cells which can be reached from boundary cell
  for (let i = 0; i < n; i++) {
    dfs(i, 0);
    dfs(i, m - 1);
  }
  for (let i = 0; i < m; i++) {
    dfs(0, i);
    dfs(n - 1, i);
  }

  //the remaining land points are the ones, which can be walked, not going off bounds, so we just count them (alternatively can be count using reduce method)
  let count = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (grid[i][j]) count++;
    }
  }
  return count;
};
