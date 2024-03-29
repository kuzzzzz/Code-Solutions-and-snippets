var jump = function (nums) {
  let maxj = 0,
    oldMax = 0,
    jump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxj = Math.max(maxj, nums[i] + i);
    if (i === oldMax) {
      jump++;
      oldMax = maxj;
    }
  }
  return jump;
};
