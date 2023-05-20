var calcEquation = function (equations, values, queries) {
  // use map to build an undirected graph
  // key is variable in equations, value is an array of [key, factor]
  const map = new Map();
  const len = equations.length;
  // start building the graph
  for (let i = 0; i < len; i++) {
    const [key1, key2] = equations[i];
    const factor = values[i];
    if (!map.has(key1)) map.set(key1, []);
    if (!map.has(key2)) map.set(key2, []);
    map.get(key1).push([key2, factor]);
    map.get(key2).push([key1, 1 / factor]);
  }

  const result = [];

  for (let query of queries) {
    // use bfs to calculate each query's result
    // set is used to store visited "key" or "variable" to avoid visiting the same one duplicate times
    result.push(calcQuery(query, map, new Set()));
  }

  return result;
};

function calcQuery(query, map, set) {
  const [start, end] = query;
  if (!map.has(start) || !map.has(end)) return -1;
  // 1 is the initial result value
  const queue = [[start, 1]];
  set.add(start);
  while (queue.length > 0) {
    const [key, currResult] = queue.shift();
    for (let [neigh, factor] of map.get(key)) {
      if (neigh === end) {
        return currResult * factor;
      }
      if (!set.has(neigh)) {
        queue.push([neigh, currResult * factor]);
        set.add(neigh);
      }
    }
  }

  return -1;
}
