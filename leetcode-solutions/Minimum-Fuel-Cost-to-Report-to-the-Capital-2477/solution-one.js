const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };

let res, k, g;
const minimumFuelCost = (roads, seats) => {
    let n = roads.length + 1;
    k = seats, res = 0, g = initializeGraph(n);
    packUG(g, roads);
    dfs(0, -1);
    return res;
};

const dfs = (cur, par) => {
    let sum = 1;
    for (const child of g[cur]) {
        if (child != par) sum += dfs(child, cur);
    }
    if (cur != 0) res += parseInt((sum + k - 1) / k);
    return sum;
}