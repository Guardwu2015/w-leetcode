// https://leetcode.com/problems/partition-equal-subset-sum/description/
// 动态规划
// 时间复杂度: O(len(nums) * O(sum(nums)))
// 空间复杂度: O(len(nums) * O(sum(nums)))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i ++){
      if(nums[i] <= 0) {
        throw new Error('numbers in nums must be greater than zero.')
      }
      sum += nums[i];
  }

  if(sum % 2 === 1) {
    return false
  }

  const n = nums.length;
  const C = sum / 2

  const memo = []
  for(let i = 0; i <= C; i ++) {
    memo[i] = (nums[0] === i)
  }
      

  for(let i = 1; i < n; i ++) {
    for(let j = C; j >= nums[i]; j--) {
      memo[j] = memo[j] || memo[j - nums[i]]
    }
  }

  return memo[C]
}

const canPartition = function(nums) {
    const n = nums.length
    if (n < 2) {
        return false
    }
    let sum = 0, maxNum = 0
    for (const num of nums) {
        sum += num;
        // maxNum = maxNum > num ? maxNum : num
        maxNum = Math.max(maxNum, num)
    }
    if (sum & 1) {
        return false
    }
    sum /= 2
    if (maxNum > sum) {
        return false
    }
    const dp = new Array(sum + 1).fill(false)
    dp[0] = true
    for (const num of nums) {
        for (let j = sum; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[sum]
}