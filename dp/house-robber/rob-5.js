// 198. House Robber
// https://leetcode.com/problems/house-robber/description/
// 动态规划
// 状态转移方程：dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
// 时间复杂度: O(n)
// 空间复杂度: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const n = nums.length
  if(!n) return 0
  if(n === 1) return nums[0]
  
  const dp = []
  dp[0] = nums[0]
  // 第二间可盗窃的最大值要么是他自己，要么是他上一间房，符合动态公式
  dp[1] = Math.max(nums[0], nums[1])
  
  for(let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  
  return dp[n - 1]
}