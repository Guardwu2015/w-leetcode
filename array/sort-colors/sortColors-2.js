// https://leetcode-cn.com/problems/sort-colors

/**
 * 思路二： 三路快速排序的思想，对整个数组只遍历了一遍
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let zero = -1
    let two = nums.length;

    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 0) {
            ++zero;
            [nums[zero], nums[i]] = [nums[i], nums[zero]]
            ++i;
        } else if (nums[i] === 2){
            --two;
            [nums[two], nums[i]] = [nums[i], nums[two]]
        }
    }
};
