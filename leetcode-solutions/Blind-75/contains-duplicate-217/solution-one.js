// code
var containsDuplicate = function (nums) {
  let hashSet = new Set(nums);
  return hashSet.size !== nums.length;
};
