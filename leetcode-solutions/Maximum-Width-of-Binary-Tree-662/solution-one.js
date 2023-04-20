/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let leftRight = [];

  function traverse(root, y = 0n, x = 0n) {
    if (!root) return;
    if (!leftRight[y]) leftRight[y] = [x, x];
    else
      leftRight[y] = [
        x < leftRight[y][0] ? x : leftRight[y][0],
        x > leftRight[y][1] ? x : leftRight[y][1],
      ];
    traverse(root.left, y + 1n, x * 2n);
    traverse(root.right, y + 1n, x * 2n + 1n);
  }

  traverse(root);

  return leftRight.reduce(
    (max, [left, right]) => Math.max(max, Number(right - left + 1n)),
    0
  );
};
