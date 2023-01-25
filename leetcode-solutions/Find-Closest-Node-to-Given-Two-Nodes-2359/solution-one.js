function dfs(edges, dist, queue, node) {
  while (node != -1 && queue[node] == -1) {
    queue[node] = dist;
    dist += 1;
    node = edges[node];
  }
  return queue;
}
var closestMeetingNode = function (edges, node1, node2) {
  const q1 = new Array(edges.length).fill(-1);
  const q2 = new Array(edges.length).fill(-1);
  dfs(edges, 0, q1, node1);
  dfs(edges, 0, q2, node2);
  // console.log(q1, q2);
  let minDist = Number.POSITIVE_INFINITY;
  let res = -1;
  for (let i = 0; i < edges.length; i += 1) {
    // console.log({minDist, q1: q1[i], q2: q2[i], res});
    if (Math.min(q1[i], q2[i]) >= 0 && Math.max(q1[i], q2[i]) < minDist) {
      minDist = Math.max(q1[i], q2[i]);
      res = i;
    }
  }
  return res != -1 ? res : -1;
};
