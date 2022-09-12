// given n number of nodes in a BST
// find all the unique structure
// This is the formula for finding all unique structure in bst 
// Loving the inbuilt debugger in vscode

function uniqueStructures(n) {
  
  const G = Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
}

uniqueStructures(3);
