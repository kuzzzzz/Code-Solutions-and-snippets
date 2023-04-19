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
var longestZigZag = (root) => {
  if (!root) return 0;

  let res = 0;

  let dfs = (node, depth, dest) => {
    if (!node) return null;

    res = Math.max(res, depth);

    if (node.left) dfs(node.left, dest === "left" ? depth + 1 : 1, "right");
    if (node.right) dfs(node.right, dest === "left" ? 1 : depth + 1, "left");
  };

  dfs(root, 0, "left");
  dfs(root, 0, "right");

  return res;
};
