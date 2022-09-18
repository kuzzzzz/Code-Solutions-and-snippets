debugger;
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let ans = 0;
  let left_max = 0,
    right_max = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= left_max
        ? (left_max = height[left])
        : (ans += left_max - height[left]);
      ++left;
    } else {
      height[right] >= right_max
        ? (right_max = height[right])
        : (ans += right_max - height[right]);
      --right;
    }
  }
  return ans;
};

//Test case
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
