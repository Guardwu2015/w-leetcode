// https://leetcode-cn.com/problems/sort-colors

/**
 * 思路一：计数排序的思路， 对整个数组遍历了两遍
 * 时间复杂度: O(n)
 * 空间复杂度: O(k), k为元素的取值范围
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    const count = [0, 0, 0]
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++
    }

    let index = 0
    for (let i = 0; i < count[0]; i++) {
        nums[index++] = 0
    }

    for (let i = 0; i < count[1]; i++) {
        nums[index++] = 1
    }

    for (let i = 0; i < count[2]; i++) {
        nums[index++] = 2
    }
}