// https://leetcode.com/problems/longest-increasing-subsequence/description/

/**
 * 思路：记忆化搜索
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @return {number}
 */
let memo = []
const lengthOfLIS = function (nums) {
    if (nums.length === 0) {
        return 0
    }

    memo = new Array(nums.length).fill(-1)
    let res = 1
    for (let i = 0; i < nums.length; i++) {
        res = Math.max(res, getMaxLength(nums, i))
    }
    return res
}

function getMaxLength(nums, index) {
    if (memo[index] !== -1) {
        return memo[index]
    }

    let res = 1
    for (let i = 0; i < index; i++) {
        if (nums[index] > nums[i]) {
            res = Math.max(res, 1 + getMaxLength(nums, i))
        }
    }

    return res
}