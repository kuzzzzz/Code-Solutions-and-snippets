debugger;
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] < nums[1 + i] + nums[2 + i]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};

// Test Cases
largestPerimeter([2, 1, 2]);
largestPerimeter([1, 2, 1]);    
