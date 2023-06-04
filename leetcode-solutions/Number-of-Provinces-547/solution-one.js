const dfs = (isConnected, visited, index) => {
  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[index][j] === 1 && visited[j] === 0) {
      visited[j] = 1;

      dfs(isConnected, visited, j);
    }
  }
};

var findCircleNum = function (isConnected) {
  let yams = new Array(isConnected.length).fill(0);

  let count = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (yams[i] === 0) {
      dfs(isConnected, yams, i);

      count++;
    }
  }

  return count;
};
