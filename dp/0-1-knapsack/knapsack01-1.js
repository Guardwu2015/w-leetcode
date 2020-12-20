/**
 * 思路：递归，记忆化搜索
 * 状态转移方程：F(i,C) = max{F(i-1, C), v(i) + F(i-1, C-w(i))}
 * 时间复杂度: O(n * C) 其中n为物品个数; C为背包容积
 * 空间复杂度: O(n * C)
 * @param {number[]} w 
 * @param {number[]} v 
 * @param {number} C
 * @return {number}
 */

const memo = []
const knapsack01 = function (w, v, C) {
  if(w == null || v == null || w.length !== v.length) {
    throw new Error('Invalid w or v')
  }

  if(C < 0) {
    throw new Error('C must be greater or equal to zero.')
  }

  const n = w.length
  if(n == 0 || C == 0) {
    return 0
  }

  // 初始化二维数组memo的值为-1
  for(let i = 0; i < n; i ++) {
    memo[i] = []
    for(let j = 0; j <= C; j ++) {
      memo[i][j] = -1
    }
  }

  return baseValue(w, v, n - 1, C)
}
// 用 [0...index]的物品,填充容积为c的背包的最大价值
function baseValue(w, v, index, C) {
  if(c <= 0 || index < 0) {
    return 0
  }

  if(memo[index][c] != -1) {
    return memo[index][c]
  }

  let res = bestValue(w, v, index-1, c);
  if(c >= w[index]) {
    res = Math.max(res, v[index] + bestValue(w, v, index - 1, c - w[index]))
  }

  return memo[index][c] = res
}