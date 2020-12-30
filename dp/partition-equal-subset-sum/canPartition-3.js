// https://leetcode.com/problems/partition-equal-subset-sum/description/

/**
 * 思路：动态规划
 * @param {number[]} nums
 * @return {boolean}
 * 时间复杂度: O(len(nums) * O(sum(nums)))
 * 空间复杂度: O(len(nums) * O(sum(nums)))
 */

const canPartition = function(nums) {
    const n = nums.length
    if (n < 2) {
        return false
    }
    let sum = 0, maxNum = 0;
    for (const num of nums) {
        sum += num
        maxNum = maxNum > num ? maxNum : num
    }
    if (sum & 1) {
        return false
    }
    sum /= 2
    if (maxNum > sum) {
        return false
    }
    const dp = new Array(n).fill(0).map(v => new Array(sum + 1, false))
    for (let i = 0; i < n; i++) {
        dp[i][0] = true
    }
    dp[0][nums[0]] = true

    // 状态转移过程
    for (let i = 1; i < n; i++) {
        const num = nums[i]
        for (let j = 1; j <= sum; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num]
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n - 1][sum]
}
