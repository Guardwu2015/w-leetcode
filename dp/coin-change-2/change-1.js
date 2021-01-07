// https://leetcode-cn.com/problems/coin-change-2

/**
 * 思路：动态规划
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function(amount, coins) {
        const n = coins.length
        const dp = new Array(amount + 1).fill(0)
        dp[0] = 1 // base case
        for (let i = 0; i < n; i++)
            for (let j = 1; j <= amount; j++)
                if (j - coins[i] >= 0)
                    dp[j] = dp[j] + dp[j-coins[i]]

        return dp[amount]
}

export default change