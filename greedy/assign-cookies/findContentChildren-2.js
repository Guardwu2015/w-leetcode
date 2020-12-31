// https://leetcode.com/problems/assign-cookies/description/
/**
 * 贪心算法
 * 先尝试满足最不贪心的小朋友
 * 时间复杂度: O(nlogn)
 * 空间复杂度: O(1)
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    const compare = (a, b) => {
        return a - b
    }
    g.sort(compare)
    s.sort(compare)
    let gi = 0,
        si = 0
    let res = 0
    while (gi < g.length  && si < s.length) {
        if (s[si] >= g[gi]) {
            res++
            gi++
        }
        si++
    }

    return res
}

export default findContentChildren