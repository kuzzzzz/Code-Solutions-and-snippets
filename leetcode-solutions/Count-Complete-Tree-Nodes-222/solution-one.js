var countNodes = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let count = 0;
  function countNode(node) {
    count++;
    if (node.left) {
      countNode(node.left);
    }
    if (node.right) {
      countNode(node.right);
    }
  }
  countNode(root);
  return count;
};
