debugger;
const insertLevelOrder = require("../util/createBinaryTree");

var pseudoPalindromicPaths = function (root, mask = 0) {
  if (root === null) return 0;
  mask ^= 1 << (root.val - 1);

  if (root.left === null && root.right === null) return (mask & -mask) === mask;

  return (
    pseudoPalindromicPaths(root.left, mask) +
    pseudoPalindromicPaths(root.right, mask)
  );
};

// Test cases
const binTree = [1, 2, 34, 43];
let res = insertLevelOrder(binTree, 0);

console.log(pseudoPalindromicPaths(res));
