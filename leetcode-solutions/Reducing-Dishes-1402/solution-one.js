var maxSatisfaction = function (satisfaction) {
  let result = 0;

  //sort with compare function to handle -ve numbers. Without that -1 comes before -2
  satisfaction.sort((a, b) => a - b);

  while (satisfaction.length > 0) {
    let sum = 0;
    for (var i in satisfaction) {
      //sum = sum + (satisfaction * index+1)
      sum = sum + satisfaction[i] * (Number.parseInt(i) + 1);
    }
    if (sum > result) result = sum;

    //shift the array to exclude the least satisfaction value
    satisfaction.shift();
  }
  return result;
};
