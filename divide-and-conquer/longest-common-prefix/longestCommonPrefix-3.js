// https://leetcode-cn.com/problems/longest-common-prefix

/**
 * 思路：分治
 * @param {string[]} strs
 * @return {string}
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs == null || strs.length == 0) {
        return ""
    }

    return longestCommonPrefix(strs, 0, strs.length - 1)
}

function longestCommonPrefix(strs, start, end) {
    if (start === end) {
        return strs[start]
    }

    const mid = Math.floor((end - start) / 2) + start
    const lcpLeft = longestCommonPrefix(strs, start, mid)
    const lcpRight = longestCommonPrefix(strs, mid + 1, end)
    return commonPrefix(lcpLeft, lcpRight)
}

function commonPrefix(lcpLeft, lcpRight) {
    const minLength = Math.min(lcpLeft.length, lcpRight.length);
    for (let i = 0; i < minLength; i++) {
        if (lcpLeft.charAt(i) !== lcpRight.charAt(i)) {
            return lcpLeft.substring(0, i)
        }
    }
    return lcpLeft.substring(0, minLength)
}