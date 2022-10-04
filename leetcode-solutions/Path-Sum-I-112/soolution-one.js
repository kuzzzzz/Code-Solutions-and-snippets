debugger;
const insertLevelOrder = require("../util/createBinaryTree");

var hasPathSum = function (root, targetSum, sum = 0) {
  if (!root) return false;
  sum += root.val;

  if (!root.left && !root.right && sum === targetSum) return true;

  return (
    hasPathSum(root.left, targetSum, sum) ||
    hasPathSum(root.right, targetSum, sum)
  );
};

const binTree = insertLevelOrder(
  [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
  0
);

let r = hasPathSum(binTree, 22);
console.log(r);
