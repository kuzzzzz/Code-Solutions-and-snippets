var cloneGraph = function (node) {
  var visited = {};

  let dfs = function (node) {
    if (!node) return node;
    if (visited[node.val] != null) return visited[node.val];

    let root = new Node(node.val);
    visited[node.val] = root;

    for (let n of node.neighbors) {
      root.neighbors.push(dfs(n));
    }

    return root;
  };

  return dfs(node);
};
