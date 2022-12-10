debugger;
const { insertLevelOrder } = require("../util/createBinaryTree");

let arr = [1, 2, 3, 4, 5, 6];

let binTree = insertLevelOrder(arr, 0);

console.log(binTree);

const maxProduct = (root) => {
  const subSums = new Uint32Array(50000);
  let max = (idx = 0);
  const sum = helper(root);
  for (let i = 0; i < idx; ++i) {
    const val = subSums[i];
    val * (sum - val) > max && (max = val * (sum - val));
  }
  return max % (10 ** 9 + 7);

  function helper(node) {
    const subSum =
      node.val +
      (node.left ? helper(node.left) : 0) +
      (node.right ? helper(node.right) : 0);
    subSums[idx++] = subSum;
    return subSum;
  }
};

// Test cases
let r = maxProduct(binTree);

// // There's a bug in this result it, return only one val in the array instead of two
console.log(r);
