debugger
var findLength = function (A, B) {
  const dp = [...Array(A.length + 1)].map(() => Array(B.length + 1).fill(0));
  let maxLen = 0;

  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
console.log(maxLen)
return maxLen
};



// Test cases

// Test one
findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);

//Test two 
findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]);
