var closedIsland = function (grid) {
  function find(x, y) {
    if (grid[y] === undefined || grid[y][x] === undefined) {
      return 1;
    }

    if (grid[y][x] === 1) {
      return 0;
    }

    grid[y][x] = 1;

    let res = 0;

    res += find(x + 1, y);
    res += find(x - 1, y);
    res += find(x, y + 1);
    res += find(x, y - 1);

    return res;
  }

  let count = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === 0) {
        const res = find(x, y);

        if (res === 0) {
          count++;
        }
      }
    }
  }

  return count;
};
