// 198. House Robber
// https://leetcode.com/problems/house-robber/description/
// 记忆化搜索
// 时间复杂度: O(n^2)
// 空间复杂度: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    // memo[i] 表示考虑抢劫 nums[i...n) 所能获得的最大收益
    const memo = new Array(nums.length + 1).fill(-1)
    return tryRob(nums, 0, memo)
}

// 考虑抢劫nums[index...nums.length)这个范围的所有房子
function tryRob(nums, index, memo) {
    if (index >= nums.length || index < 0) {
        return 0
    }
    if (memo[index] !== -1) {
        return memo[index]
    }
    let res = 0
    for (let i = index; i < nums.length; i++) {
        res = Math.max(res, nums[i] + tryRob(nums, i + 2, memo))
    }
    memo[index] = res

    return res
}