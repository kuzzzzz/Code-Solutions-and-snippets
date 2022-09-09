var twoSum = function (nums, target) {
  for (let r = 0; r < nums.length; r++) {
    let s = 0;
    while (s < r) {
      if (nums[s] + nums[r] == target) {
        return [s, r];
      }
      ++s;
    }
  }
};
