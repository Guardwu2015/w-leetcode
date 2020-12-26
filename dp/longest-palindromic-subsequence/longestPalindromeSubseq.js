// https://leetcode-cn.com/problems/longest-palindromic-subsequence

/**
 * 思路：动态规划，DP-table
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
    const n = s.length
    // dp 数组全部初始化为 0
    const dp = []
    // base case
    for (let i = 0; i < n; i++) {
      dp[i] = []
      for (let j = 0; j < n; j++) {
        if (i === j) {
          dp[i][j] = 1
        } else {
          dp[i][j] = 0
        }
      }
    }

    console.log(dp)
            
    // 反着遍历保证正确的状态转移
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            // 状态转移方程
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    // 整个 s 的最长回文子串长度
    return dp[0][n - 1]
}

const result = longestPalindromeSubseq('bbbab')
console.log(result)