// https://leetcode-cn.com/problems/factorial-trailing-zeroes

/**
 * 求 2 × 5，即5出现的次数
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
    let res = 0
    let divisor = 5
    while (divisor <= n) {
        res += Math.floor(n / divisor)
        divisor *= 5
    }
    return res
};