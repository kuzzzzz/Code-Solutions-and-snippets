var maxSubArray = function (nums) {
  let maxSub = nums[0];
  let curSum = 0;
  for (let x of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += x;
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub;
};
