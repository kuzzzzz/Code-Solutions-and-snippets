var getLengthOfOptimalCompression = function (s, k) {
  s = s.split("");
  const n = s.length;
  const table = s.map((row) => new Array(k + 1).fill(-1));

  const dp = (i, k) => {
    if (k < 0) return n;
    if (i + k >= n) return 0;
    let ans = table[i][k];
    if (ans !== -1) return ans;
    ans = dp(i + 1, k - 1);
    let length = 0;
    let same = 0;
    let diff = 0;

    for (let x = i; x < n && diff <= k; x++) {
      if (s[x] === s[i]) {
        same++;
        if (same <= 2 || same === 10 || same === 100) {
          length++;
        }
      } else {
        diff++;
      }
      ans = Math.min(ans, length + dp(x + 1, k - diff));
    }
    table[i][k] = ans;
    return ans;
  };
  return dp(0, k);
};
