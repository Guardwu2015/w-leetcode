// https://leetcode-cn.com/problems/longest-common-prefix
/**
 * 思路：纵向扫描
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs === null || strs.length === 0) {
        return ''
    }

    const length = strs[0].length
    const count = strs.length
    for (let i = 0; i < length; i++) {
        const c = strs[0][i]
        for (let j = 1; j < count; j++) {
            if (i === strs[j].length || strs[j][i] !== c) {
                return strs[0].substring(0, i)
            }
        }
    }

    return strs[0]
}

export default longestCommonPrefix