debugger
var groupAnagrams = function (strs) {
  const res = {};

  strs.forEach((str) => {
    const count = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      count[str.charCodeAt(i) - 97] += 1; // Ascii value of a is 97
    }

    res[count] = res[count] ? [...res[count], str] : [str];
  });

  return Object.values(res);
};

// Test Cases //
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
groupAnagrams([""]);
groupAnagrams(["a"]);
