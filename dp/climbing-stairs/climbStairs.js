// https://leetcode-cn.com/problems/climbing-stairs

/**
 * 解法一：自顶向下，递归
 * @param {number} n
 * @return {number}
 */

const climbStairs1 = function (n) {
    const memo = new Array(n + 1).fill(-1)

    return calcWays(n, memo)
}

function calcWays (n, memo) {
    if (n === 0 || n === 1) {
        return 1
    }
    if (memo[n] === -1) {
        memo[n] = calcWays(n - 1, memo) + calcWays(n - 2, memo)
    }

    return memo[n]
}

/**
 * 解法二：自底向上，动态规划
 * @param {number} n
 * @return {number}
 */
const climbStairs2 = function(n) {
    const memo = []
    memo[0] = 1
    memo[1] = 1

    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }

    return memo[n]
}

// const result1 = climbStairs1(1)
// const result2 = climbStairs2(2)
// const result3 = climbStairs1(10)
// const result4 = climbStairs2(20)

// console.log('result1---', result1, result2, result3, result4);

export {
    climbStairs1,
    climbStairs2,
}
