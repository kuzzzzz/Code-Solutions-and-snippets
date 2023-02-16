var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

  //    const queue = [[root,1]]
  //    let res = 0

  //    while (queue.length){
  //        let [node, depth] = queue.pop()

  //        if(node){
  //            res = Math.max(res,depth)
  //            queue.push([node.left,depth+1])
  //            queue.push([node.right,depth+1])

  //        }
  //    }
  //     return res
};
