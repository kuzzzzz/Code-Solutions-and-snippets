debugger;


function climbStairs(n) {
  let one = 1,
    two = 1;
  for (let i = n - 1; i > 0; i--) {
    let temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

let test1 = climbStairs(3);
let test2 = climbStairs(4);

console.log(test1, test2);