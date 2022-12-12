// memo is keepeing a record of all the steps that you've taken in an operation

debugger;
const climbStairs = (n) => {
  const memo = new Map();

  return climbStairsMemo(n, memo);
};

const climbStairsMemo = (n, memo) => {
  console.log(memo);
  if (n <= 2) return n;

  if (!memo.has(n)) {
    memo.set(n, climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo));
  }

  return memo.get(n);
};

let test1 = climbStairs(3);
let test2 = climbStairs(4);

console.log(test1, test2);
