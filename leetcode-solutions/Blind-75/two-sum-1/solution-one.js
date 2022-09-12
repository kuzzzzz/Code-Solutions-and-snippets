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
console.log("yams");
twoSum([2, 3, 1, 4, 6, 79, 1, 2, 3, 4, 5], 9);
