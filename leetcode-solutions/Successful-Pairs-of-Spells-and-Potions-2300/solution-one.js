
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let res = [];
  let len = potions.length;
  for (let sp of spells) {
    let l = 0;
    let r = len - 1;
    let ans = len;
    while (l <= r) {
      let mid = (l + (r - l) / 2) | 0;
      if (sp * potions[mid] == success) {
        ans = mid;
        r = mid - 1;
      } else if (sp * potions[mid] < success) {
        l = mid + 1;
      } else {
        ans = mid;
        r = mid - 1;
      }
    }
    res.push(len - ans);
  }
  return res;
};
