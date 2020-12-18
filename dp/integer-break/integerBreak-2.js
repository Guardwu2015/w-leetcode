 // https://leetcode.com/problems/integer-break/description/
 /// 记忆化搜索，添加备忘录memo
 /// 时间复杂度: O(n^2)
 /// 空间复杂度: O(n)
const integerBreak = function (n) {
    if (n === 1) {
        return 1
    }
    const memo = new Array(n + 1).fill(-1)

    return recursion(n, memo)
}

function recursion(n, memo) {
    let res = -1
    if (memo[n] !== -1) {
        return memo[n]
    }
    for (let i = 1; i < n; i++) {
        res = max3(res, i * (n - i), i * recursion(n - i, memo))
        memo[n] = res
    }

    return res
}

function max3(a, b, c) {
    return Math.max(a, Math.max(b, c))
}

const res = integerBreak(10)
console.log(res)