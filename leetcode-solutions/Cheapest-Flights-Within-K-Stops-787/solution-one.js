var findCheapestPrice = function (n, flights, src, dst, K) {
  let M = Array(n)
    .fill()
    .map((_, i) => (i === src ? 0 : Infinity));
  for (let k = 0; k < K + 1; k++) {
    let N = [...M];
    for (let [from, to, price] of flights) {
      N[to] = Math.min(N[to], M[from] + price);
    }
    M = [...N];
  }
  return M[dst] != Infinity ? M[dst] : -1;
};
