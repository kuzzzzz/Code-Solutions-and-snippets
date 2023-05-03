const findDifference = (a, b) => {
    let res1 = [], res2 = [], sa = new Set(a), sb = new Set(b);
    for (const x of sa) {
        if (!sb.has(x)) res1.push(x);
    }
    for (const x of sb) {
        if (!sa.has(x)) res2.push(x);
    }
    return [res1, res2];
};