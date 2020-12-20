// https://leetcode.com/problems/partition-equal-subset-sum/description/
// 记忆化搜索
// 时间复杂度: O(len(nums) * O(sum(nums)))
// 空间复杂度: O(len(nums) * O(sum(nums)))

// memo[i][c] 表示使用索引为[0...i]的这些元素,是否可以完全填充一个容量为c的背包
// -1 表示为未计算; 0 表示不可以填充; 1 表示可以填充
const memo = []

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= 0) {
            throw new Error('numbers in nums must be greater than zero.')
        }
        sum += nums[i]
    }

    if(sum % 2 === 1) {
        return false
    }

    const len = Math.floor(sum / 2 + 1)
    for(let i = 0; i < nums.length; i ++) {
        memo[i] = []
        for (let j = 0; j < len; j++) {
            memo[i][j] = -1
        }
    }
    return tryPartition(nums, nums.length - 1, Math.floor(sum / 2))
}

    // 使用nums[0...index], 是否可以完全填充一个容量为sum的背包
function tryPartition(nums, index, sum){
    if(sum == 0) {
        return true
    }

    if(sum < 0 || index < 0) {
        return false
    }

    if(memo[index][sum] != -1) {
        return memo[index][sum] === 1
    }

    memo[index][sum] = (tryPartition(nums, index - 1, sum) ||
            tryPartition(nums, index - 1, sum - nums[index])) ? 1 : 0

    return memo[index][sum] === 1
}
