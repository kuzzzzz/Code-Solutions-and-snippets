debugger;

let g, dp0, dp1;
const sumOfDistancesInTree = (n, edges) => {
  g = initializeGraph(n);
  dp0 = Array(n).fill(0);
  dp1 = Array(n).fill(0);
  addEdgeToG(g, edges);
  dfs(0, -1);
  let res = Array(n).fill(0);
  res[0] = dp1[0];
  dfs2(0, -1, n, res);
  return res;
};

const dfs = (cur, parent) => {
  dp0[cur] = 1;
  dp1[cur] = 0;
  for (const v of g[cur]) {
    if (v == parent) continue;
    dfs(v, cur);
    dp0[cur] += dp0[v];
    dp1[cur] += dp1[v] + dp0[v];
  }
};

const dfs2 = (cur, parent, n, res) => {
  for (const v of g[cur]) {
    if (v == parent) continue;
    res[v] = res[cur] + n - 2 * dp0[v];
    dfs2(v, cur, n, res);
  }
};

const initializeGraph = (n) => {
  let G = [];
  for (let i = 0; i < n; i++) {
    G.push([]);
  }
  return G;
};
const addEdgeToG = (G, Edges) => {
  for (const [x, y] of Edges) {
    G[x].push(y);
    G[y].push(x);
  }
};

// Test cases
let test1 = sumOfDistancesInTree(6, [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
]);
let test2 = sumOfDistancesInTree(1, []);
let test3 = sumOfDistancesInTree(2, [[1, 0]]);

console.log(test1, test2, test3);
