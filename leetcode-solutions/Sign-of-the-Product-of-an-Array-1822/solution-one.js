var arraySign = function (nums) {
  if (nums.indexOf(0) !== -1) return 0;

  let val = nums.reduce((a, b) => a * b);
  if (val > 1) return 1;
  if (val < 1) return -1;
};
