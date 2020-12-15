// https://leetcode-cn.com/problems/fibonacci-number

/**
 * 思路：动态规划，重叠子问题
 * @param {number} N
 * @return {number}
 */
const fib = function (N) {
    if (N < 1) return 0
    // 备忘录全初始化为 0
    const memo = new Array(N + 1).fill(0)
    // 进行带备忘录的递归
    return helper(memo, N)
}

function helper(memo, n) {
    // base case
    if (n === 1 || n === 2) return 1
    // 已经计算过
    if (memo[n]) return memo[n]
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
    return memo[n]
}