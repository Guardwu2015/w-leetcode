// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii

/**
 * 思路：
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
    const record = new Map()
    const res = []

    for (const num of nums1) {
        if (!record.has(num)) {
            record.set(num, 1)
        } else {
            record.set(num, record.get(num) + 1)
        }
    }

    for (let num of nums2) {
        if (record.has(num) && record.get(num) > 0) {
            res.push(num)
            record.set(num, record.get(num) - 1)
        }
    }

    return res
}

export default intersect