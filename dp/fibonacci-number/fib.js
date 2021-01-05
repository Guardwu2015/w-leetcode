// https://leetcode-cn.com/problems/fibonacci-number

/**
 * 思路-：递归，重叠子问题
 * @param {number} N
 * @return {number}
 */
const fib1 = function (N) {
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

/**
 * 思路二
 * @param {number} n
 * @return {number}
 */
const fib2 = function(n) {
    if (n === 0) {
        return 0
    }
    if (n === 2 || n === 1) {
        return 1
    }
    let prev = 1, curr = 1
    for (let i = 3; i <= n; i++) {
        const sum = prev + curr
        prev = curr
        curr = sum
    }
    return curr
}

export { 
    fib1,
    fib2,
}