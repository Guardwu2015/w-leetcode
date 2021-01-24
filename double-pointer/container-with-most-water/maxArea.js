// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * 思路：双指针
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let l = 0,
        r = height.length - 1
    if (r === 0) {
        return 0
    }

    let res = 0
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l)
        res = Math.max(res, area)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return res
}

export default maxArea