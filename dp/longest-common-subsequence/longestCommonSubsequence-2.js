// https: //leetcode-cn.com/problems/longest-common-subsequence/

/**
 * 动态规划
 * LCS问题
 * 时间复杂度: O(len(text1) * len(text2))
 * 空间复杂度: O(len(text1) * len(text2))
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

const longestCommonSubsequence = function (text1, text2) {
    const m = text1.length
    const n = text2.length

    const memo = []
    for (let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(0)
    }

    // base case
    for (let i = 0; i < m; i++) {
        if (text1.charAt(i) === text2.charAt(0)) {
            for (let k = i; k < m; k++)
                memo[k][0] = 1
            break
        }
    }
    
    // base case
    for (let j = 0; j < n; j++) {
        if (text1.charAt(0) === text2.charAt(j)) {
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

export default longestCommonSubsequence