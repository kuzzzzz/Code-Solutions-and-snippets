var maxProfit = function (prices) {
  let l = 0,
    r = 1,
    maxP = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      let profit = prices[r] - prices[l];
      maxP = Math.max(maxP, profit);
    } else {
      l = r;
    }
    r++;
  }
  return maxP;
};
