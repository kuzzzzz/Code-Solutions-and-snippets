var isBipartite = function (graph) {
  const state = {
    A: [],
    B: [],
  };

  const bfs = (startNode) => {
    const queue = [[startNode, "A"]];
    while (queue.length !== 0) {
      const [node, nodeGroup] = queue.shift();
      console.log(state);
      if (!graph[node]) {
        if (nodeGroup === "A" && state.B.indexOf(node) !== -1) return false;
        if (nodeGroup === "B" && state.A.indexOf(node) !== -1) return false;
      }

      const nextGroup = nodeGroup === "A" ? "B" : "A";
      graph[node] &&
        graph[node].forEach((nextNode) => {
          if (graph[nextNode]) {
            queue.push([nextNode, nextGroup]);
          }
        });

      state[nodeGroup].push(node);
      graph[node] = null;
    }
    return true;
  };

  for (let i = 0, l = graph.length; i < l; i++) {
    if (graph[i] && !bfs(i)) return false;
  }

  return true;
};
