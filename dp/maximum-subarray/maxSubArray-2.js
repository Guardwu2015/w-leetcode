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
    let dp_0 = nums[0];
    let dp_1 = 0,
        res = dp_0

    // 状态转移方程
    for (let i = 1; i < n; i++) {
        dp_1 = Math.max(nums[i], nums[i] + dp_0)
        dp_0 = dp_1
        // 顺便计算最大的结果
        res = Math.max(res, dp_1)
    }

    return res
}

export default maxSubArray