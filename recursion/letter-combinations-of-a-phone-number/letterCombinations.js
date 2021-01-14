// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */

const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

const letterCombinations = function(digits) {
    const res = []
    if (digits === '') {
        return res
    }

    findCombinations(digits, 0, '', res)
    return res
};

function findCombinations(digits, index, s, res) {
    if (digits.length === s.length) {
        res.push(s)
    }
    const c = Number(digits[index])
    const letter = letterMap[c]
    for (let i = 0; i < letter.length; i++) {
        findCombinations(digits, index + 1, s + letter[i], res)
    }

    return
}