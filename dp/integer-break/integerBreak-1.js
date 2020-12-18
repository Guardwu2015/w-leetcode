// https://leetcode.com/problems/integer-break/description/
// 解法一：暴力搜索
// 在Leetcode中提交这个版本的代码会超时! (Time Limit Exceeded)
// 时间复杂度: O(n^n)
// 空间复杂度: O(n)
const integerBreak = function (n) {
    if (n === 1) {
        return 1
    }

    let res = -1
    for (let i = 1; i < n; i++) {
        res = max3(res, i * (n - i), i * integerBreak(n - i))
    }

    return res
}

function max3(a, b, c) {
    return Math.max(a, Math.max(b, c))
}

const res = integerBreak(10)
console.log(res)