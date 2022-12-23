debugger;
var maxProfit = function (prices) {
  let memo = {};
  function rec(i, j) {
    let index = [i, j];
    if (index in memo) return memo[index];
    if (i >= prices.length) return 0;
    let profit = -Infinity;

    if (prices[j] >= prices[i]) {
      // if current share price is less than or equal previously bought share.
      // greedily buy current share
      // no need to sell;
      profit = Math.max(profit, rec(i + 1, i));
    } else if (prices[i] - prices[j] > 0) {
      // if we can make profit sell it
      profit = Math.max(profit, prices[i] - prices[j] + rec(i + 3, i + 2));
      // hold on we might get bigger profit next
      profit = Math.max(profit, rec(i + 1, j));
    }
    memo[index] = profit;
    return profit;
  }
  // start from 2nd day and buy first day share
  return rec(1, 0);
};

let test1 = maxProfit([1, 2, 3, 0, 2]);
console.log(test1);
