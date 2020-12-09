// https://leetcode-cn.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findErrorNums = function (nums) {
    const n = nums.length;
    let dup = -1
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0)
            dup = Math.abs(nums[i])
        else
            nums[index] *= -1;
    }

    let missing = -1
    for (let i = 0; i < n; i++)
        if (nums[i] > 0)
            missing = i + 1

    return [dup, missing]
}