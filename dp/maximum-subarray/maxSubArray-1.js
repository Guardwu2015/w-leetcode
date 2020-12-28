// https://leetcode-cn.com/problems/maximum-subarray

/**
 * 思路：动态规划
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    const n = nums.length
    if (n === 0) return 0
    
    // base case
    // 第一个元素前面没有子数组
    dp[0] = nums[0]

    // 状态转移方程
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }

    // 得到 nums 的最大子数组
    let res = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        res = Math.max(res, dp[i])
    }

    return res
}