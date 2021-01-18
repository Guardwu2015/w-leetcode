// https://leetcode.com/problems/assign-cookies/description/
/**
 * 贪心算法
 * 先尝试满足最贪心的小朋友
 * 时间复杂度: O(nlogn)
 * 空间复杂度: O(1)
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    const compare = (a, b) => {
        return a - b
    }
    g.sort(compare)
    s.sort(compare)

    let gi = g.length - 1, si = s.length - 1
    let res = 0
    while(gi >= 0 && si >= 0){
        if(s[si] >= g[gi]){
            res++
            si--
        }
        gi--
    }

    return res
}



export default findContentChildren