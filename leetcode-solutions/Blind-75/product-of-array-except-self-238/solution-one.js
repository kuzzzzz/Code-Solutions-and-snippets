var productExceptSelf = function (nums) {
  let res = [];
  let prefix = 1;

  // prefix
  for (let x = 0; x < nums.length; x++) {
    res[x] = prefix;
    prefix *= nums[x];
  }
  let postfix = 1;

  // postfix
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix *= nums[j];
  }
  return res;
};
