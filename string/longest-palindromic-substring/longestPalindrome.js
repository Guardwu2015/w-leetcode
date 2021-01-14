// https: //leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * 解法一
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let start = 0,
        end = 0
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i)
        let len2 = expandAroundCenter(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }

    return s.substring(start, end + 1)
};

function expandAroundCenter(s, left, right) {
    let l = left,
        r = right
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        l--
        r++
    }

    return r - l - 1
}

/**
 * 解法二
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // 回文字符串长度为奇数
        const s1 = palindrome(s, i, i)
        // 回文字符串长度为偶数
        const s2 = palindrome(s, i, i + 1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }

    return res
}

function palindrome(s, l, r) {
    // 防止索引越界
    while (l >= 0 && r < s.length &&
        s[l] === s[r]) {
        // 向两边展开
        l--
        r++
    }
    // 返回以 s[l] 和 s[r] 为边界的最长回文串
    return s.substr(l + 1, r - l - 1);
}