// https://leetcode-cn.com/problems/edit-distance

/**
 * 思路：动态规划， DP-table
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
        const m = word1.length, n = word2.length
        const dp = []

        // base case 
        for (let i = 1; i <= m; i++) {
          dp[i] = new Array(n).fill(0)
          dp[i][0] = i 
        }

        for (let j = 1; j <= n; j++) {
          dp[0][j] = j
        }

        // 自底向上求解
        for (let i = 1; i <= m; i++) {
          for (let j = 1; j <= n; j++) {
            if (word1.charAt(i-1) == word2.charAt(j-1)) {
              dp[i][j] = dp[i - 1][j - 1]
            } else {             
              dp[i][j] = min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i-1][j-1] + 1
              )
            }
          }
        }

        // 储存着整个 s1 和 s2 的最小编辑距离
        return dp[m][n]
      }

function min(a, b, c) {
  return Math.min(a, Math.min(b, c))
}