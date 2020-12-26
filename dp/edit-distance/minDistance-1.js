
/**
 * 思路：递归（可能会超出超时）
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

const minDistance = function(word1, word2) {
    return dp(word1, word2, word1.length - 1, word2.length - 1)
}

function dp(s1, s2, i, j) {
    // base case
    if (i == -1) {
        return j + 1
    }
    if (j == -1) {
        return i + 1
    }

    if (s1[i] === s2[j]) { // 什么都不做
        return dp(s1, s2, i - 1, j - 1)
    } else {
        return min(
            dp(s1, s2, i, j - 1) + 1, // 插入
            dp(s1, s2, i - 1, j) + 1, // 删除
            dp(s1, s2, i - 1, j - 1) + 1  // 替换
        )
    }
}

function min(a, b, c) {
  return Math.min(a, Math.min(b, c))
}