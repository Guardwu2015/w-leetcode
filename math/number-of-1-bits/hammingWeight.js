// https://leetcode-cn.com/problems/number-of-1-bits/

/**
 * 思路：位运算
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let res = 0

    while (n !== 0) {
        n = n & (n - 1)
        res++
    }

    return res
};