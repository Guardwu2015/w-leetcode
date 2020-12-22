// https: //leetcode-cn.com/problems/longest-common-subsequence/

/**
 * 记忆化搜索
 * LCS问题
 * 时间复杂度: O(len(text1) * len(text2))
 * 空间复杂度: O(len(text1) * len(text2))
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

const memo = []
const longestCommonSubsequence = function (text1, text2) {
    if (text1 === null || text2 === null) {
        throw new Error('s1 and s2 can not be null.')
    }

    const m = text1.length
    const n = text2.length
    if (m === 0 || n === 0) {
        return 0
    }

    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(-1)
    }

    return lcs(text1, text2, m - 1, n - 1)
    // return getLCS(text1, text2)
}

function lcs(s1, s2, m, n) {
    if (m < 0 || n < 0) {
        return 0
    }

    if (memo[m][n] !== -1) {
        return memo[m][n]
    }

    let res = 0
    if (s1[m] === s2[n]) {
        res = 1 + lcs(s1, s2, m - 1, n - 1)
    } else {
        res = Math.max(lcs(s1, s2, m - 1, n),
            lcs(s1, s2, m, n - 1))
    }

    memo[m][n] = res
    return res
}

function getLCS(s1, s2) {
    const m = s1.length - 1
    const n = s2.length - 1

    let res = ''
    while (m >= 0 && n >= 0)
        if (s1[m] == s2[n]) {
            res = `${s1[m]}res`
            m--
            n--
        } else if (m == 0) {
            n--
        } else if (n == 0) {
            m--
        } else {
            if (memo[m - 1][n] > memo[m][n - 1]) {
                m--
            } else {
                n--
            }
    }

    return res
}