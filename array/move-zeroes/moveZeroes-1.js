// https://leetcode-cn.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i]
        }
    }

    for (let i = k; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

export default moveZeroes