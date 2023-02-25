var maxProfit = function (stonks) {
  let min = stonks[0];
  let maxprof = -1;

  for (let s of stonks) {
    if (s < min) min = s;
    if (s - min > maxprof) maxprof = s - min;
  }
  return maxprof;
};
