debugger;
const {insertLevelOrder,TreeNode} = require("../util/createBinaryTree");

var addOneRow = function (root, val, depth) {
  if (depth == 1) return new TreeNode(val, root, null);

  let curDepth = 1;
  let queue = [root];

  while (queue.length > 0) {
    curDepth++;
    let newQueue = [];
    while (queue.length > 0) {
      let cur = queue.shift();

      if (cur) {
        if (curDepth == depth) {
          const l = cur.left;
          const r = cur.right;
          cur.left = new TreeNode(val, l, null);
          cur.right = new TreeNode(val, null, r);
        } else {
          newQueue.push(cur.left);
          newQueue.push(cur.right);
        }
      }
    }
    queue = newQueue; //breaks when depth is reached
  }
console.log(root)
  return root;
};

//Test Cases

const binTree = insertLevelOrder([4, 2, 6, 3, 1, 5], 0);
addOneRow(binTree, 1, 2);

const binTree2 = insertLevelOrder([4, 2, null, 3, 1], 0);
addOneRow(binTree2, 1, 3);
