// https: //leetcode-cn.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */

const myAtoi = function (s) {
    const MAX = 2 ** 31 - 1
    const MIN = -1 * 2 ** 31
    const number = parseInt(s, 10)

    if (isNaN(number)) {
        return 0
    }
    if (number < MIN) {
        return MIN
    }
    if (number > MAX) {
        return MAX
    }

    return number
};