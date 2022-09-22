debugger;
var reverseWords = function (s) {
  let lastSpaceIndex = -1;
  let len = s.length;
  s = s.split("");

  for (let strIndx = 0; strIndx <= len; strIndx++) {
    if (strIndx == len || s[strIndx] == " ") {
      let startIndx = lastSpaceIndex + 1;
      let endIndx = strIndx - 1;
      while (startIndx < endIndx) {
        let temp = s[startIndx];
        s[startIndx] = s[endIndx];
        s[endIndx] = temp;
        startIndx++;
        endIndx--;
      }

      lastSpaceIndex = strIndx;
    }
  }

  return s.join("");
};

// Test Cases //
reverseWords("Let's take LeetCode contest");

reverseWords("God Ding");
