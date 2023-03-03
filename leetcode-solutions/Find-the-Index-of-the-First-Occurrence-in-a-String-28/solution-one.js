var strStr = function (haystack, needle) {
  const length1 = haystack.length;
  const length2 = needle.length;
  if (length1 < length2) {
    return -1;
  }
  for (let i = 0; i <= length1 - length2; i++) {
    let flag = true;
    for (let j = 0; j < length2; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;
};
