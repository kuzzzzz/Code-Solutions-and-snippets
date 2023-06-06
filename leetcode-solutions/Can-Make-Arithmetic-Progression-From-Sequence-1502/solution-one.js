var canMakeArithmeticProgression = function (arr) {
  // you can hardy call this a solution I am basically
  // writing test case for the points that fall

  arr.sort((a, b) => b - a);
  let diff = arr[1] - arr[0];
  for (let x = 2; x < arr.length; x++) {
    console.log(arr);
    if (arr[x] - arr[x - 1] !== diff) {
      return false;
    }
  }
  return true;
};
