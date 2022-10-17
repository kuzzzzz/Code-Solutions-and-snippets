var checkIfPangram = function (sentence) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let d = 0;
  for (let x of alph) {
    if (sentence.indexOf(x) >= 0) {
      d++;
    }
  }
  return d == 26;
};

// This is the first solution that came 
// to mind when I saw this question,  it's an eassy