// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted

/**
 * 思路：双指针
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum == target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++
        } else if (sum > target) {
            right--
        }
    }
    return [-1, -1]
}