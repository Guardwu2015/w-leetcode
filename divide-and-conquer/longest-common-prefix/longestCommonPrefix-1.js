// https://leetcode-cn.com/problems/longest-common-prefix

/**
 * 思路：横向扫描
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) {
        return ''
    }
    const count = strs.length
    let prefix = strs[0]
    for (let i = 1; i < count; i++) {
        prefix = lcp(prefix, strs[i])
        if (prefix.length === 0) {
            break
        }
    }

    return prefix
};

function lcp(str1, str2) {
    const length = Math.min(str1.length, str2.length)
    let index = 0

    while (index < length && str1[index] === str2[index]) {
        index++
    }

    return str1.substring(0, index)
}

export default longestCommonPrefix