// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    let p1 = 0,
        p2 = 0,
        pos = 0
    let nums = []

    while (p1 < len1 && p2 < len2) {
        if (nums1[p1] <= nums2[p2]) {
            nums[pos++] = nums1[p1++]
        } else {
            nums[pos++] = nums2[p2++]
        }
    }
    while (p1 < len1) {
        nums[pos++] = nums1[p1++]
    }
    while (p2 < len2) {
        nums[pos++] = nums2[p2++]
    }

    if ((pos - 1) % 2 === 0) { // 数组长度为奇数
        return nums[(pos - 1) / 2]
    } else {
        mid = Math.floor((pos - 1) / 2)
        return (nums[mid] + nums[mid + 1]) / 2
    }
};