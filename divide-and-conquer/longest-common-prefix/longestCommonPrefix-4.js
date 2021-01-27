// https://leetcode-cn.com/problems/longest-common-prefix

/**
 * 思路：二分查找
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) {
        return ""
    }

    let minLength = Number.MAX_SAFE_INTEGER
    for (const str of strs) {
        minLength = Math.min(minLength, str.length)
    }
    let low = 0,
        high = minLength
    while (low < high) {
        let mid = Math.floor((high - low + 1) / 2) + low
        if (isCommonPrefix(strs, mid)) {
            low = mid
        } else {
            high = mid - 1
        }
    }
    return strs[0].substring(0, low);
}

function isCommonPrefix(strs, length) {
    const str0 = strs[0].substring(0, length)
    const count = strs.length
    for (let i = 1; i < count; i++) {
        const str = strs[i]
        for (let j = 0; j < length; j++) {
            if (str0.charAt(j) != str.charAt(j)) {
                return false
            }
        }
    }
    return true
}