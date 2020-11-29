// https://leetcode-cn.com/problems/subarray-sum-equals-k/
/**
 * 解法一：前缀和
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    const n = nums.length
    const sum = []
    sum[0] = 0;
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }

    let ans = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (sum[i] - sum[j] === k) {
                ans++
            }
        }
    }

    return ans
}

/**
 * 解法二：使用Map, 优化前缀和
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