// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const MAX = 2 ** 31 - 1
    const MIN = -1 * 2 ** 31
    if (x === 0) {
        return 0
    }
    let sign = 1
    if (x < 0) {
        sign = -1
    }
    let y = Math.abs(x)
    let res = 0
    while (y !== 0) {
        res = res * 10 + y % 10
        if (res > MAX || res < MIN) {
            return 0
        }

        y = Math.floor(y / 10)
    }

    return sign * res
};