var countSubarrays = function (nums, minK, maxK) {
  let n = nums.length;
  let ans = 0,
    left = -1,
    minstart = -1,
    maxstart = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] < minK || nums[i] > maxK) left = i;
    if (nums[i] == maxK) maxstart = i;
    if (nums[i] == minK) minstart = i;

    let count = Math.min(minstart, maxstart) - left;
    ans += Math.max(0, count);
  }
  return ans;
};
