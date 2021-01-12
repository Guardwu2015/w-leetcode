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

    // memo 是 (m + 1) * (n + 1) 的动态规划表格
    // memo[i][j] 表示s1的前i个字符和s2前j个字符的最长公共子序列的长度
    // 其中memo[0][j] 表示s1取空字符串时, 和s2的前j个字符作比较
    // memo[i][0] 表示s2取空字符串时, 和s1的前i个字符作比较
    // 所以, memo[0][j] 和 memo[i][0] 均取0
    // 我们不需要对memo进行单独的边界条件处理 :-)
    // 注意数组的长度+1
    const memo = new Array(m + 1).fill(new Array(n + 1).fill(0))
    // const memo = []
    // for (let i = 0; i <= m; i++) {
    //     memo[i] = new Array(n + 1).fill(0)
    // }

    // 动态规划的过程
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                memo[i][j] = 1 + memo[i - 1][j - 1]
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1])
            }
        }
    }

    return memo[m][n]
}

// const result = longestCommonSubsequence('abcde', 'def')
// console.log('result', result)

export default longestCommonSubsequence