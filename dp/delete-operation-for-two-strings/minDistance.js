// https://leetcode-cn.com/problems/delete-operation-for-two-strings
import longestCommonSubsequence from '../longest-common-subsequence/longestCommonSubsequence-3'

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

export default minDistance