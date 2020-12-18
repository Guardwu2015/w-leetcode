// https://leetcode.com/problems/integer-break/description/
// 动态规划
// 时间复杂度: O(n^2)
// 空间复杂度: O(n)

const integerBreak = function (n) {
    const memo = new Array(n + 1).fill(-1)
    memo[1] = 1

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            memo[i] = max3(memo[i], j * (i - j), j * memo[i - j])
        }
    }

    return memo[n]
}

function max3(a, b, c) {
    return Math.max(a, Math.max(b, c))
}

const res = integerBreak(10)
console.log(res)