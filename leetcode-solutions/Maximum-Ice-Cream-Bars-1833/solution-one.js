var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  if (costs[0] > coins) {
    return 0;
  }
  var cnt = 0;
  var i = 0;
  while (coins > 0 && i < costs.length) {
    if (coins < costs[i]) {
      break;
    }
    coins -= costs[i];
    i++;
    cnt++;
  }
  return cnt;
};
