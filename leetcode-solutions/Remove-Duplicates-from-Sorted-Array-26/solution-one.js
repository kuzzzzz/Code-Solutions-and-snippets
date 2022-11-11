var removeDuplicates = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      nums.splice(i, 1);
      i--;
    } else {
      hash[nums[i]] = true;
    }
  }
};
