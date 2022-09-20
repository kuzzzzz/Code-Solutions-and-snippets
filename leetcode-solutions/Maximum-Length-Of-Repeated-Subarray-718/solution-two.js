var findLength = function (nums1, nums2) {
  let nums1Pointer = 0;
  let nums1Length = nums1.length;

  let nums2Length = nums2.length;
  let nums2Pointer = nums2Length - 1;

  let maxCounter = 0;
  let shrinkage = 0;

  for (let i = 1; i < nums1Length + nums2Length - 1; i++) {
    let counter = 0;
    let currentNums1 = nums1Pointer;
    let currentNums2 = nums2Pointer;

    for (let j = 0; j < i - shrinkage; j++) {
      if (nums1[currentNums1] === nums2[currentNums2]) {
        counter++;
        if (counter > maxCounter) {
          maxCounter = counter;
        }
      } else {
        counter = 0;
      }

      currentNums1++;
      currentNums2++;

      if (currentNums1 > nums1Length - 1) {
        shrinkage++;
      }
    }

    nums2Pointer--;

    if (nums2Pointer < 0) {
      nums2Pointer = 0;
      nums1Pointer++;
      shrinkage++;
    }
  }

  return maxCounter;
};

// Test cases

// Test one
findLength([1, 2, 3, 2, 1], [(3, 2, 1, 4, 7)]);

//Test two
findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]);
