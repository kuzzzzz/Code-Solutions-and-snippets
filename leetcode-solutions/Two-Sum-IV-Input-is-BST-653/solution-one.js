debugger;
const {insertLevelOrder} = require("../util/createBinaryTree");

var findTarget = function (root, k) {
  let set = new Set();
  return helper(root, set, k);
};
const helper = (root, set, k) => {
  if (!root) return false;
  if (set.has(k - root.val)) return true;
  set.add(root.val);
  return helper(root.left, set, k) || helper(root.right, set, k);
};

//Test cases
let arr = [5, 3, 6, 2, 4, null, 7];
let binTree = insertLevelOrder(arr, 0);

let arr1 = [5, 3, 6, 2, 4, null, 7];
let binTree1 = insertLevelOrder(arr1, 0);

console.log(findTarget(binTree, 9));
console.log(findTarget(binTree1, 28));
