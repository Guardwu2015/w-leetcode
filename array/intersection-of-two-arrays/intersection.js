// https://leetcode-cn.com/problems/intersection-of-two-arrays

/**
 * 思路：
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const record = new Set()
    let res = new Set()

    for (let i = 0; i < nums1.length; i++) {
        record.add(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        if (record.has(nums2[i])) {
            res.add(nums2[i])
        }
    }
    res = [...res]
    return res
}

export default intersection