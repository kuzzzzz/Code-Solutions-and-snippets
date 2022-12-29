const priorAssign = 10 ** 5; // here priorAssign to make process time in higher priority than index, cuz the index the max is 10 **5, so at least 10 ** 5 (> also works) to balance from index
const getOrder = (tasks) => {
  tasks = tasks.map((t, i) => [...t, i]);
  tasks.sort((x, y) => y[0] - x[0]);
  // this javascript pq only allows one final priority, so we cannot do sth similar from Java PriorityQueue.
  /*
	   PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> {
            if(x[1] == y[1])  return x[2] - y[2];  // same process time, with smaller index
			return x[1] - y[1] // smaller index
        });
	*/
  // so have to use process time and index to make a final priority decision.
  // here process time is in first priority, so we use a priorAssign to make process time more important.
  let pq = new MinPriorityQueue({
    priority: ([et, pt, idx]) => pt * priorAssign + idx,
  });
  let curT = tasks[tasks.length - 1][0];
  let res = [];
  while (tasks.length || pq.size()) {
    while (tasks.length && curT >= tasks[tasks.length - 1][0]) {
      pq.enqueue(tasks.pop());
    }
    if (pq.size()) {
      let [et, pt, idx] = pq.dequeue().element;
      curT += pt;
      res.push(idx);
    } else if (tasks.length) {
      curT = tasks[tasks.length - 1][0];
    }
  }
  return res;
};
