var minimumRounds = function (tasks) {
  let map = new Map();

  for (let i = 0; i < tasks.length; i++) {
    if (!map.has(tasks[i])) map.set(tasks[i], 1);
    else map.set(tasks[i], map.get(tasks[i]) + 1);
  }

  let rounds = 0;
  for (let [k, v] of map) {
    if (v == 1) return -1;
    else rounds += Math.ceil(v / 3);
  }

  return rounds;
};
