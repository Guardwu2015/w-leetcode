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
const findContentChildren = function(g, s) {
    g.sort()
    s.sort()
    console.log(g, s)
    let gi = 0, si = 0
    let res = 0
    while(gi >= 0 && si >= 0){
        if(s[si] >= g[gi]){
            res++
            gi++
        }
        si++
    }

    return res
}