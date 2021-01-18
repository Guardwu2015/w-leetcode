// https://leetcode-cn.com/problems/trapping-rain-water/

/**
 * 思路1：双指针
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    if (height.length === 0) {
        return 0
    }

    const len = height.length
    let left = 0, right = len - 1
    let res = 0

    let l_max = height[0]
    let r_max = height[len - 1]

    while (left < right) {
        l_max = Math.max(l_max, height[left])
        r_max = Math.max(r_max, height[right])

        if (l_max < r_max) {
            res += l_max - height[left]
            left++
        } else {
            res += r_max - height[right]
            right--
        }
    }

    return res
}

/**
 * 思路二：备忘录
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    if (height.length === 0) {
        return 0
    }
    const len = height.length
    let res = 0
    const l_max = [], r_max = []
    l_max[0] = height[0]
    r_max[len - 1] = height[len - 1]

      // 从左向右计算 l_max
    for (let i = 1; i < len; i++)
        l_max[i] = Math.max(height[i], l_max[i - 1])
    // 从右向左计算 r_max
    for (let i = len - 2; i >= 0; i--) 
        r_max[i] = Math.max(height[i], r_max[i + 1])
    // 计算答案
    for (let i = 1; i < len - 1; i++) 
        res += Math.min(l_max[i], r_max[i]) - height[i]
    return res
};