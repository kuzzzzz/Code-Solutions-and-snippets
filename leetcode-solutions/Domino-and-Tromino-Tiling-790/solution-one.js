/**
 * @param {number} n
 * @return {number}
 */

debugger;
var numTilings = function (n) {
  let md = 1e9;
  md += 7;
  const v = new Array(n).fill(0);
  v[1] = 1;
  v[2] = 2;
  v[3] = 5;
  if (n <= 3) return v[n];
  for (let i = 4; i <= n; ++i) {
    v[i] = 2 * v[i - 1] + v[i - 3];
    v[i] %= md;
  }
  return v[n];
};

let test1 = numTilings(4);
console.log(test1);
