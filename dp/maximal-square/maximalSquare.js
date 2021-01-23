// https://leetcode-cn.com/problems/maximal-square/

/**
 * 思路：动态规划
 * @param {character[][]} matrix
 * @return {number}
 */

const maximalSquare = function (matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
        return 0
    }

    let maxSide = 0
    const m = matrix.length
    const n = matrix[0].length
    const dp = []

    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === "1") {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
                }
                maxSide = Math.max(maxSide, dp[i][j])
            } else {
                dp[i][j] = 0
            }
        }
    }


    return maxSide * maxSide
}

export default maximalSquare