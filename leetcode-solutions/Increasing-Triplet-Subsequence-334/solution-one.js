debugger;
var increasingTriplet = function (nums) {
  let firstNum = Math.pow(2, 31) - 1,
    secondNum = Math.pow(2, 31) - 1;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] <= firstNum) {
      firstNum = nums[i];
    } else if (nums[i] <= secondNum) {
      secondNum = nums[i];
    } else {
      console.log(firstNum, secondNum, nums[i]);

      return true;
    }
    i++;
  }
  return false;
};

//Test Cases
increasingTriplet([1, 2, 3, 4, 5]);
increasingTriplet([5, 4, 3, 2, 1]);
increasingTriplet([2, 1, 5, 0, 4, 6]);
increasingTriplet([20, 100, 10, 12, 5, 13]);
