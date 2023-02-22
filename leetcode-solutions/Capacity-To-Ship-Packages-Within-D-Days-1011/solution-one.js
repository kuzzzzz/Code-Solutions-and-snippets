const isPossible = (weights, n, days, mid) => {
  let dayCount = 1;
  let weightSum = 0;

  for (let i = 0; i < n; i++) {
    if (weightSum + weights[i] <= mid) {
      weightSum += weights[i];
    } else {
      dayCount += 1;
      if (dayCount > days || weights[i] > mid) {
        return false;
      }
      weightSum = weights[i];
    }
  }
  return true;
};
var shipWithinDays = function (weights, days) {
  const sum = weights.reduce((acc, curr) => acc + curr, 0);
  let s = 0;
  let e = sum;
  while (s < e) {
    let mid = Math.floor((s + e) / 2);
    if (isPossible(weights, weights.length, days, mid)) {
      e = mid;
    } else {
      s = mid + 1;
    }
  }
  return e;
};
