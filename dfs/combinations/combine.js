/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const res = []
const combine = function (n, k) {
    if (n <= 0 || k <= 0 || k > n) {
        return []
    }

    backtrack(n, k, 1, []);

    return res
}

// 求解C(n,k), 当前已经找到的组合存储在c中, 需要从start开始搜索新的元素
function backtrack(n, k, start, c) {
    if (c.length === k) {
        res.push(c.slice())
        return
    }

    for (let i = start; i <= n; i++) {
        c.push(i)
        backtrack(n, k, i + 1, c)
        c.pop() // 回溯
    }

    return
}