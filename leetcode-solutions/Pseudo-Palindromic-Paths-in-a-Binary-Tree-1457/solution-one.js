debugger;
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const dig = [2, 3, 1, 3, 1, null, 1];

function insertLevelOrder(arr, i) {
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new TreeNode(arr[i]);

    // insert left child
    root.left = insertLevelOrder(arr, 2 * i + 1);

    // insert right child
    
    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
}

const cat = insertLevelOrder(dig, 0);


// This is were the actual code to teh solution starts 
// The above was just boiler plate to create the root node


var pseudoPalindromicPaths = function (root, mask = 0) {
  console.log(cat);
  if (root === null) return 0;
  mask ^= 1 << (root.val - 1);

  if (root.left === null && root.right === null) return (mask & -mask) === mask;

  return (
    pseudoPalindromicPaths(root.left, mask) +
    pseudoPalindromicPaths(root.right, mask)
  );
};

console.log(pseudoPalindromicPaths(cat));
