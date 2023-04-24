var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    const firstStone = findAndRemoveMaxStone(stones);
    const secondStone = findAndRemoveMaxStone(stones);

    stones.push(firstStone - secondStone);
  }

  return stones.length === 1 ? stones[0] : 0;
};

const findAndRemoveMaxStone = function (stones) {
  const maxStone = Math.max(...stones);
  stones.splice(stones.indexOf(maxStone), 1);
  return maxStone;
};
