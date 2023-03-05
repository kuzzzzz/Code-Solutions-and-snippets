var minJumps = function (arr) {
  let groups = new Map();
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    let group = groups.get(v);
    if (group) {
      group.push(i);
    } else {
      group = [i];
      groups.set(v, group);
    }
  }
  let costs = [0];
  let baseCost = 0;
  let work = [0];
  let goal = arr.length - 1;

  while (work.length) {
    let newWork = [];
    let groupCost = baseCost + 1;
    for (let i of work) {
      let v = arr[i];
      if (v === undefined) continue;
      arr[i] = undefined;

      let before = i - 1,
        after = i + 1;
      if (before >= 0 && costs[before] === undefined) {
        costs[before] = groupCost;
        newWork.push(before);
      }
      if (after <= goal && costs[after] === undefined) {
        if (after === goal) return groupCost;
        costs[after] = groupCost;
        newWork.push(after);
      }

      let group = groups.get(v);
      if (!group) continue;
      groups.delete(v);
      for (let index of group)
        if (index !== i) {
          if (index === goal) return groupCost;
          if (costs[index] === undefined) {
            newWork.push(index);
            costs[index] = groupCost;
          }
        }
    }
    baseCost = groupCost;
    work = newWork;
  }

  return costs[arr.length - 1];
};
