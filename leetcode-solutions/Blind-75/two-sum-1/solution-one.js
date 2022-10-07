var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const sum = target - nums[i];
    if (map[parseInt(sum)] !== undefined) {
      //fancy was for checking for undefined is void 0
      return [map[sum], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

//Test cases
let res = twoSum([2, 3, 1, 4, 6, 79, 1, 2, 3, 4, 5], 9);
console.log(res);
