// https://leetcode-cn.com/problems/power-of-two
/**
 * 思路：位运算
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
     if (n <= 0) return false
    return (n & (n - 1)) == 0
}