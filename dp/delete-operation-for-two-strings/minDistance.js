// https: //leetcode-cn.com/problems/delete-operation-for-two-strings

/**
 * 思路：动态规划，lcs
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
    const m = word1.length,
        n = word2.length
    if (m === 0) {
        return n
    }
    if (n === 0) {
        return m
    }

    const lcs = longestCommonSubsequence(word1, word2)

    return m - lcs + n - lcs
}

function longestCommonSubsequence(text1, text2) {
    const m = text1.length
    const n = text2.length

    const memo = []
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(0)
    }

    for (let i = 0; i < m; i++) {
        if (text1.charAt(i) == text2.charAt(0)) {
            for (let k = i; k < m; k++)
                memo[k][0] = 1
            break
        }
    }

    for (let j = 0; j < n; j++) {
        if (text1.charAt(0) == text2.charAt(j)) {
            for (let k = j; k < n; k++)
                memo[0][k] = 1
            break
        }
    }

    // 动态规划的过程
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (text1.charAt(i) === text2.charAt(j)) {
                memo[i][j] = 1 + memo[i - 1][j - 1]
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1])
            }
        }
    }

    return memo[m - 1][n - 1]
}