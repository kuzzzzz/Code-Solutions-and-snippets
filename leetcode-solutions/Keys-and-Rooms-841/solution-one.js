debugger;
var canVisitAllRooms = function (rooms) {
  const len = rooms.length;
  const vis = new Array(len).fill(false);

  const dfs = (room) => {
    vis[room] = true;
    for (let key of rooms[room]) {
      if (!vis[key]) dfs(key);
    }
  };

  dfs(0);
  return vis.every((room) => room == true);
};

let test1 = [[1], [2], [3], []];
let test2 = [[1, 3], [3, 0, 1], [2], [0]];

let res1 = canVisitAllRooms(test1);
let res2 = canVisitAllRooms(test2);

console.log(res1, res2);

