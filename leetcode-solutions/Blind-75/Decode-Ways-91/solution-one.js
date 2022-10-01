const numDecodings = (s) => {
  const dp = {
    // cache i:
    [s.length]: 1,
  };

  const dfs = (i) => {
    // i is the position we are at in s
    if (i in dp) {
      // if i has already been cached or if it's the last position in our string
      return dp[i];
    }
    if (s[i] === "0") {
      // bad base case: if char is starting with 0 then it is invalid
      return 0;
    }

    let result = dfs(i + 1); // we take the char at i as a single digit

    if (
      // if double-digit value between 10-26
      i + 1 < s.length && // if we do have a second char that comes after the first
      (s[i] === "1" || // if double-digit value starts with 1 and there is a second digit then we have a valid double-digit value that starts with 1 ex: 10 - 19 // if double-digit value starts with 2 and there is a second digit from 0 - 6, then we have a valid double-digit value that is in the range of 20-26
        (s[i] === "2" && "0123456".search(s[i + 1]) !== -1))
    ) {
      result += dfs(i + 2); // add dfs of valid double-digit value to current result
    }
    console.log(dp);
    dp[i] = result; // cache result
    return result;
  };
  return dfs(0); // returns result of how many ways can decode string starting at index 0
};
