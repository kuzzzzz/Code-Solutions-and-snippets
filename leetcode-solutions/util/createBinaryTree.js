function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

 function insertLevelOrder(arr, i) {
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new TreeNode(arr[i]);

    // insert left child

    // insert right child
    root.left = insertLevelOrder(arr, 2 * i + 1);

    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
};

module.exports = {
  TreeNode,
  insertLevelOrder,
};
