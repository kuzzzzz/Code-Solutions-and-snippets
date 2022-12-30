var allPathsSourceTarget = function (graph) {
  const allPossiblePaths = [];
  explore([0]);
  return allPossiblePaths;

  function explore(state) {
    if (isValid(state)) {
      allPossiblePaths.push([...state]);
      return;
    }

    for (let candidate of getCandidates(state)) {
      state.push(candidate);
      explore(state);
      state.pop();
    }
  }

  function isValid(state) {
    return state.at(-1) == graph.length - 1;
  }

  function getCandidates(state) {
    const key = state.at(-1);
    return graph[key];
  }
};
