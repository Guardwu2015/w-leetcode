// https://leetcode-cn.com/problems/subarray-sum-equals-k/
/**
 * 思路：前缀和
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

export default subarraySum