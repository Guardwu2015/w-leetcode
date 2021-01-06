// https://leetcode-cn.com/problems/coin-change

/**
 * 思路：动态规划
 * 状态转移方程：
 * dp[i] = 0, i = 0
 * dp[i] = -1, i < 0
 * dp[i] = min(dp[i], dp[i-coin] + 1)
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  let dp = new Array( amount + 1 ).fill( Infinity )
  dp[0] = 0
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount]
}

// coins = [1, 2, 5], amount = 11
// const result = coinChange(coins, amount)
// console.log('result', result)

export default coinChange