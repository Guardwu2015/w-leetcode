// 198. House Robber
// https://leetcode.com/problems/house-robber/description/
// 动态规划
// 时间复杂度: O(n^2)
// 空间复杂度: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    const n = nums.length
    if (n === 0) {
        return 0
    }

    // memo[i] 表示考虑抢劫 nums[i...n) 所能获得的最大收益
    const memo = new Array(n + 1).fill(-1)
    memo[n - 1] = nums[n - 1]

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            memo[i] = Math.max(memo[i], nums[j] + (j + 2 < n ? memo[j + 2] : 0))
        }
    }

    return memo[0]
}