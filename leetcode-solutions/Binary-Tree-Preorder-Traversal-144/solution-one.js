var preorderTraversal = function (root) {
  let result = [];
  function preorder(node) {
    if (!node) return;
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }
  preorder(root);
  return result;
};
