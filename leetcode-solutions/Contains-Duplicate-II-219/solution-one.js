debugger;
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

//Test Cases
let res = {
  test1: containsNearbyDuplicate([1, 2, 3, 1], 3),
  test2: containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2),
  test3: containsNearbyDuplicate([1, 0, 1, 1], 1),
};

console.log(res)
