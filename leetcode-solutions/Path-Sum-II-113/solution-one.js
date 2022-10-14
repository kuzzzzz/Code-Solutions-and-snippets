debugger;
const { insertLevelOrder } = require("../util/createBinaryTree");

let pathSum = function (root, targetSum) {
  if (!root) return [];

  const results = [];
  const findPath = (node, sum, path) => {
    sum = sum - node.val;

    if (sum == 0 && !node.left && !node.right) {
      results.push(path);

      return;
    }

    if (node.left) findPath(node.left, sum, [...path, node.left.val]);
    if (node.right) findPath(node.right, sum, [...path, node.right.val]);
  };

  findPath(root, targetSum, [root.val]);
  console.log(results);

  return results;
};

//Test cases
// you have to craete a binaray tree with this array to run the test case
// To find the all the paths that sum up to 22
// const binTree = insertLevelOrder(
//   [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
//   0
// );
let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
let binTree = insertLevelOrder(arr, 0);
console.log(binTree);

// Test cases
let r = pathSum(binTree, 22);
let v = pathSum(binTree, 22);

// There's a bug in this result it, return only one val in the array instead of two
console.log(r, v);
