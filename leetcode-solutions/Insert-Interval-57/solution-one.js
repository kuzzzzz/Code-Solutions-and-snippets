var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  // add all the intervals ending before newInterval starts
  while (i < intervals.length && intervals[i][1] < newInterval[0])
    result.push(intervals[i++]);
  // merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      // we could mutate newInterval here also
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1]),
    ];
    i++;
  }
  result.push(newInterval); // add the union of intervals we got
  // add all the rest
  while (i < intervals.length) result.push(intervals[i++]);
  return result;
};

