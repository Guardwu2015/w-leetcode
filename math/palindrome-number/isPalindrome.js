// https: //leetcode-cn.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
    if (x < 0) return false
    let num = x,
        div = 1
    let n = x
    while (Math.floor(n / div) >= 10) {
        div *= 10
        n = Math.floor(n / 10)
    }
    while (num !== 0) {
        const l = Math.floor(num / div)
        const r = x % 10
        if (l !== r) return false
        num = Math.floor((x % div) / 10)
        div /= 100
    }
    return true
}

const res = isPalindrome(12321)