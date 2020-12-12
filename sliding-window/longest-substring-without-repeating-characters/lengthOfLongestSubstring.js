// https: //leetcode-cn.com/problems/longest-substring-without-repeating-characters/
/**
 * 解法一
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
    let len = s.length
    if (len <= 1) {
        return len
    }
    let max = 1
    let record = 0
    for (let i = 0; i < len; i++) {
        let index = s.indexOf(s[i], record)
        if (index < i) {
            record = index + 1
        }
        max = Math.max(max, i - record + 1)
    }
    return max
}

/**
 * 解法二
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const window = {}

    let left = 0, right = 0
    let res = 0 // 记录结果
    while (right < s.length) {
        const c = s[right]
        right++
        // 进行窗口内数据的一系列更新
        if (!window[c]) {
            window[c] = 0
        }
        window[c]++
        // 判断左侧窗口是否要收缩
        while (window[c] > 1) {
            const d = s[left]
            left++
            // 进行窗口内数据的一系列更新
            window[d]--
        }
        // 在这里更新答案
        res = Math.max(res, right - left)
    }
    return res
}