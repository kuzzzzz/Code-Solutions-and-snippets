
var shuffle = function (nums, n) {
  let ans = [nums[0], nums[n]];

  for (let i = 1; i < n; i++) {
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }

  return ans;
};
