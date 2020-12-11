// https://leetcode-cn.com/problems/reverse-string

/**
 * 思路：双指针
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (arr) {
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}