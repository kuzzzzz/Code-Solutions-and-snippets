var numOfMinutes = function (n, headID, manager, informTime) {
  // created a map from manager -> list of employees
  const map = new Map();
  manager.forEach((m, idx) => {
    // O(n)
    let ems = map.has(m) ? map.get(m) : [];
    ems.push(idx);
    map.set(m, ems);
  });

  // initially add the headID (topmost manager) to the queue along with the inform time
  const queue = [[headID, informTime[headID]]];
  let minTime = 0;

  // BFS - going level by level and keeping track of the employee and inform time per employee at each level
  // minTime is the time it takes inform all employees till the last level until which all are informed
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; ++i) {
      const [m, time] = queue.shift();
      if (map.has(m)) {
        map.get(m).forEach((em) => queue.push([em, time + informTime[em]]));
      }
      if (time > minTime) {
        minTime = time;
      }
    }
  }
  return minTime;
};
