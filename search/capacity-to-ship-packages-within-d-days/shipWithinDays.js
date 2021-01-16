// https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// 寻找左侧边界的二分查找
const shipWithinDays = function(weights, D) {
	// 载重可能的最小值
    let left = getMax(weights)
	// 载重可能的最大值 + 1
    let right = getSum(weights) + 1
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (canFinish(weights, D, mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

// 如果载重为 cap，是否能在 D 天内运完货物？
function canFinish(w, D, cap) {
    let i = 0
    for (let day = 0; day < D; day++) {
        let maxCap = cap
        while ((maxCap -= w[i]) >= 0) { // 技巧点
            i++
            if (i === w.length)
                return true
        }
    }
    return false
}

function getMax(piles) {
    let max = 0
    for (let n of piles)
        max = Math.max(n, max)
    return max
}

function getSum(piles) {
    let sum = 0
    for (let n of piles)
        sum += n
    return sum
}