debugger;
var canJump = function (nums) {
  let pos = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= pos) {
      pos = i;
    }
  }
  return pos == 0 ? true : false;
};

let test1 = canJump([2, 3, 1, 1, 4]);
console.log(test1);
