var isCompleteTree = function (root) {
  if (!root) return false;
  var isComplete = true,
    queue = [],
    node,
    size,
    rowNum = 0,
    gap = false;
  queue.push(root);
  while (queue.length) {
    size = queue.length;
    if (!isComplete) return false;
    if (size < Math.pow(2, rowNum)) isComplete = false;
    for (var i = 0; i < size; i++) {
      node = queue.shift();
      if (node.left && gap) return false;
      if (node.left) queue.push(node.left);
      else gap = true;
      if (node.right && gap) return false;
      if (node.right) queue.push(node.right);
      else gap = true;
    }
    rowNum++;
  }
  return true;
};
