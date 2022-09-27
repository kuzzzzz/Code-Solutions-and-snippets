var pushDominoes = function (dominoes) {
  //     there are N dom in line
  //     we simultaneously push some of the dom--all at the same time
  //     Either to the Right or Left
  //     After each second Left will push the next left
  //     After each second right will push the next right
  //     when a domino gets hit by dominos from both left and right it stays still
  //     A domino expends no additional force to a falling or already fallen domino
  //     You are given a string domnio rep the initial stare
  //     Return a string rep the final state
  //     .L.R...LR..L..
  //     LL.RRRRLRRRL..
  //     LL.RLLLLRLLL..
  debugger
  let dom = dominoes.split("");
  let r;
  let l;
  for (let x = 0; x < dom.length; x++) {
    if (dom[x] == ".") continue;
    if (dom[x] == "L" && dom[x - 1] == ".") {
      dom[x - 1] = "L";
      continue
    }
    if (dom[x] == "R") {
      r = x;
      for (let j = x; j < dom.length; j++) {
        if (dom[j] == "L") {
          l = j;
          x=j
          break;
        }
      }
        
      while (r < l) {
        r++;
        --l;
        if(r==l || l<r)break
        if((dom[r] =='R' && dom[l]=='.') && dom[l++] =='L')continue
        dom[r] = "R";
        dom[l] = "L";
      
      }
    }
  }
  console.log(dom)
};

// TestCases 
pushDominoes("RR.L");
// pushDominoes(".L.R...LR..L..");
pushDominoes("LL.RRRRLRRRL..");
pushDominoes("LL.RLLLLRLLL..");


// Output: "LL.RR.LLRRLL..";
// Unaccepted solution 