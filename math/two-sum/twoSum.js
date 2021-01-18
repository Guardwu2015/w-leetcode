// https://leetcode-cn.com/problems/two-sum/
/**
 * 解法一
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const numsIndexes = {}

    for (let i = 0; i < nums.length; i += 1) {
        let curDiff = target - nums[i]

        if (numsIndexes[curDiff] !== undefined &&
            numsIndexes[curDiff] !== i) {
            return [i, numsIndexes[curDiff]]
        } else {
            numsIndexes[nums[i]] = i
        }
    }
}

/**
 * 解法二
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const arr = nums.sort((a, b) => a - b)
    let low = 0, high = nums.length - 1

    while(low < high) {
        const sum = arr[low] + arr[high]
        if (sum < target) {
            low++
        } else if (sum > target) {
            high--
        }
        return [low, high]
    }

    return []
}