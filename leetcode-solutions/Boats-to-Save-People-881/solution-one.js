var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let low = 0;
  let high = people.length - 1;
  let count = 0;
  while (low <= high) {
    let weight = people[low] + people[high];

    if (weight <= limit) {
      low++;
    }

    count++;
    high--;
  }

  return count;
};
