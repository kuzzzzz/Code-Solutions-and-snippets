function nearestExit(maze = [], entrance = []) {
  const N = maze.length;
  const M = maze[0].length;
  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  const checkField = (x, y) => x >= 0 && y >= 0 && x < N && y < M;

  let path = Number.MAX_VALUE;
  let q = [[...entrance, 0]];
  maze[entrance[0]][entrance[1]] = "+";

  while (q.length) {
    let [x, y, depth] = q.shift();

    for (const direction of directions) {
      let newX = x + direction[0];
      let newY = y + direction[1];

      if (!checkField(newX, newY)) {
        if (depth) {
          path = Math.min(path, depth);
        }
      } else if (maze[newX][newY] === ".") {
        maze[newX][newY] = "+";
        q.push([newX, newY, depth + 1]);
      }
    }
  }

  return path === Number.MAX_VALUE ? -1 : path;
}
