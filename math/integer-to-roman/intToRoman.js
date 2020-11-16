// https://leetcode-cn.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    let n = num
    const seq = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const map = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    let res = ''

    for (let i = 0; i < seq.length; i++) {
        const base = seq[i]
        while (n >= base) {
            res += map[base]
            n -= base
        }
    }

    return res
}