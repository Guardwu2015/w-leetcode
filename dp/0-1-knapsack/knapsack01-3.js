/**
 * 
 * @param {*} W 背包的容量
 * @param {*} wt 物品的重量组成的数组
 * @param {*} val 物品的价值组成的数组
 */
const knapsack01 = function (W, wt, val) {
    const N = wt.length
    // 全填入 0，base case 已初始化
    const dp = new Array(N + 1).fill(new Array(W + 1).fill(0))

    for (let i = 1; i <= N; i++) {
        for (let w = 1; w <= W; w++) {
            if (w - wt[i - 1] < 0) {
                // 当前背包容量装不下，只能选择不装入背包
                dp[i][w] = dp[i - 1][w]
            } else {
                // 装入或者不装入背包，择优
                dp[i][w] = Math.max(dp[i - 1][w - wt[i - 1]] + val[i - 1],
                    dp[i - 1][w])
            }
        }
    }
    return dp[N - 1][W - 1]
}

const W = 4
const wt = [2, 1, 3]
const val = [4, 2, 3]

const res = knapsack01(W, wt, val)
console.log('res', res)