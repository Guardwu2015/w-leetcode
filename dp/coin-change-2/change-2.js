// https://leetcode-cn.com/problems/coin-change-2

/**
 * 思路：动态规划
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function(amount, coins) {
        const n = coins.length
        const dp = new Array(n + 1).fill(new Array(amount + 1).fill(0))
        // base case
        for (let i = 0; i <= n; i++) {
            dp[i][0] = 1
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= amount; j++) {
                if (j - coins[i-1] >= 0) {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i-1]]
                } else {
                    dp[i][j] = dp[i - 1][j]
                }
            }
        }
        return dp[n][amount]
}

export default change