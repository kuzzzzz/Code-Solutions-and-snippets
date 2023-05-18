var findSmallestSetOfVertices = function (n, edges) {
  seen = Array(n).fill(0);
  for (let [src, dest] of edges) {
    seen[dest] = 1;
  }
  res = [];
  for (let i = 0; i < n; i++) {
    if (seen[i] === 0) res.push(i);
  }
  return res;
};
