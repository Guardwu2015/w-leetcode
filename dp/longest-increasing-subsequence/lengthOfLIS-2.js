// https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
 * 思路：动态规划
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    if (nums.length == 0) {
        return 0
    }

    // memo[i] 表示以 nums[i] 为结尾的最长上升子序列的长度
    const memo = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                memo[i] = Math.max(memo[i], 1 + memo[j])
            }
        }
    }

    let res = memo[0]
    for (let i = 1; i < nums.length; i++) {
        res = Math.max(res, memo[i])
    }

    return res
}