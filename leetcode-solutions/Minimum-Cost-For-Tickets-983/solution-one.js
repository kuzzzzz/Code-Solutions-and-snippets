var mincostTickets = function (days, costs) {
  if (!days.length) return 0;

  let memo = new Map();
  let minCost = dfs(0);
  return minCost;

  function dfs(index) {
    if (index >= days.length) {
      return 0;
    }
    if (index === days.length - 1) {
      return Math.min(...costs);
    }
    if (memo.has(index)) {
      return memo.get(index);
    }
    let dayOne = dfs(index + 1) + costs[0];

    let nextIndex = findClosest(days[index] + 7 - 1);
    let week = dfs(nextIndex + 1) + costs[1];

    nextIndex = findClosest(days[index] + 30 - 1);
    let month = dfs(nextIndex + 1) + costs[2];

    let curRez = Math.min(dayOne, week, month);
    memo.set(index, curRez);
    return curRez;
  }

  function findClosest(n) {
    let l = 0;
    let r = days.length - 1;
    let lastClosestIndex = 0;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (days[mid] <= n) {
        l = mid + 1;
        lastClosestIndex = mid;
      }
      if (days[mid] > n) {
        r = mid - 1;
      }
    }
    return lastClosestIndex;
  }
};
