// https://leetcode-cn.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0
    let prev = 0
    for (let i = 0; i < s.length; i++) {
        const cur = map[s[i]];
        res += cur
        if (cur > prev) {
            res -= 2 * prev
        }
        prev = cur
    }
    return res
};