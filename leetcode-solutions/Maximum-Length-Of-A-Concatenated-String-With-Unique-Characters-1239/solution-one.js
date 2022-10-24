debugger;
const maxLength = (A, ans = 0) => {
  return dp(ans), ans;

  // dp
  function dp(idx, n = "") {
    // set ans as the larger of the 2
    ans = Math.max(ans, n.length);

    // start loop from start
    for (let i = idx; i < A.length; i++) {
      // set condition as same size for recursion
      const v = A[i],
        condition = (n + v).length === new Set([...n, ...v]).size;

      // next
      condition && dp(i + 1, n + v);
    }
  }
};

maxLength(["un", "iq", "ue"]);
maxLength(["cha", "r", "act", "ers"]);
maxLength(["abcdefghijklmnopqrstuvwxyz"]);
