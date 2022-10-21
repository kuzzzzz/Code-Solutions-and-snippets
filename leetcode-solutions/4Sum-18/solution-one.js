debugger
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);

  // we can exit out earlier if there is not enough nums for sum of 4
  if (nums.length < 3) return [];

  return kSum(nums, target, 0, 4);
};

const kSum = (nums, target, start, k) => {
  const result = [];

  if (
    start === nums.length || // check if we done
    nums[start] * k > target || // if k * smallest element is greater than target => imposiible to get target
    target > nums[nums.length - 1] * k // if k *largest element is less than target => imposiible to get target
  )
    return result;

  // eventually we will make it to k = 2
  if (k === 2) return twoSum(nums, target, start);

  for (let i = start; i < nums.length; i++) {
    // skip duplicates
    if (i === start || nums[i - 1] !== nums[i]) {
      /*
                calculate sums for whatever is left after we use current nums[i];
                we are making k-2 nested loops because of the recursion
            */
      for (let subSet of kSum(nums, target - nums[i], i + 1, k - 1)) {
        subSet.push(nums[i]);
        result.push(subSet);
      }
    }
  }
  return result;
};

const twoSum = (nums, target, start) => {
  const result = [];
  let lo = start,
    hi = nums.length - 1;

  while (lo < hi) {
    const sum = nums[lo] + nums[hi];

    // base || filter out duplicates
    if (sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
      lo++;
    } else if (
      sum > target ||
      (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    ) {
      hi--;
    } else {
      result.push([nums[lo], nums[hi]]);
      lo++;
      hi--;
    }
  }

  return result;
};

let res = {
  test1: fourSum([1, 0, -1, 0, -2, 2], 0),
  test2: fourSum([2, 2, 2, 2, 2], 8),
};

console.log(res)
