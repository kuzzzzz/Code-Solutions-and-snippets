var zigzagLevelOrder = function (root) {
  if (root == null) return [];
  let res = [];
  let queue = [root];
  let level = 1;
  while (queue.length) {
    let curr = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      curr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level % 2 ? res.push(curr) : res.push(curr.reverse());
    level++;
  }
  return res;
};
