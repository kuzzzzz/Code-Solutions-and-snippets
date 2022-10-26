debugger
var checkSubarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, -1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let reminder = sum % k;

    if (!map.has(reminder)) {
      map.set(reminder, i);
    } else if (i - map.get(reminder) >= 2) {
      return true;
    }
  }
  return false;
};

checkSubarraySum([23, 2, 6, 4, 7], 6);
checkSubarraySum([23, 2, 4, 6, 7], 6);
checkSubarraySum([23, 2, 6, 4, 7], 13);
