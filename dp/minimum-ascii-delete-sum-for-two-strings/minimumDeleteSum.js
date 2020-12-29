// https: //leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/

/**
 * 思路：动态规划
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
let memo
const minimumDeleteSum = function (s1, s2) {
    const m = s1.length,
        n = s2.length
    // 备忘录值为 -1 代表未曾计算
    memo = new Array(m).fill(new Array(n).fill(-1))
    return dp(s1, 0, s2, 0)
}

function dp(s1, i, s2, j) {
    let res = 0
    // base case
    if (i === s1.length) {
        // 如果 s1 到头了，那么 s2 剩下的都得删除
        for (; j < s2.length; j++)
            res += s2.charCodeAt(j)
        return res
    }
    if (j === s2.length) {
        // 如果 s2 到头了，那么 s1 剩下的都得删除
        for (; i < s1.length; i++)
            res += s1.charCodeAt(i)
        return res
    }

    if (memo[i][j] !== -1) {
        return memo[i][j]
    }

    if (s1.charAt(i) === s2.charAt(j)) {
        // s1[i] 和 s2[j] 都是在 lcs 中的，不用删除
        memo[i][j] = dp(s1, i + 1, s2, j + 1)
    } else {
        // s1[i] 和 s2[j] 至少有一个不在 lcs 中，删一个
        memo[i][j] = Math.min(
            s1.charCodeAt(i) + dp(s1, i + 1, s2, j),
            s2.charCodeAt(j) + dp(s1, i, s2, j + 1)
        );
    }
    return memo[i][j]
}