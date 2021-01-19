// https://leetcode-cn.com/problems/subarray-sum-equals-k/

/**
 * 思路：使用Map, 优化前缀和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    const n = nums.length

    const preSum = new Map()
    // base case
    preSum.set(0, 1)

    let ans = 0, sum0_i = 0
    for (let i = 0; i < n; i++) {
        sum0_i += nums[i]
        let sum0_j = sum0_i - k;
        if (preSum.has(sum0_j)) {
            ans += preSum.get(sum0_j)
        }

        preSum.set(sum0_i, (preSum.get(sum0_i) || 0) + 1)
    }
    return ans
}
    
export default subarraySum