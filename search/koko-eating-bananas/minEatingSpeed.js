// https://leetcode-cn.com/problems/koko-eating-bananas/

/**
 * 思路：二分查找
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
    // 套用搜索左侧边界的算法框架
    let left = 1, right = getMax(piles) + 1
    while (left < right) {
        // 防止溢出
        const mid = left + Math.floor((right - left) / 2)
        if (canFinish(piles, mid, H)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};

// 时间复杂度 O(N)
function canFinish(piles, speed, H) {
    let time = 0
    for (let n of piles) {
        time += timeOf(n, speed)
    }
    return time <= H
}

function timeOf(n, speed) { // 技巧点
    return Math.floor(n / speed) + (n % speed > 0 ? 1 : 0)
}

function getMax(piles) {
    let max = 0
    for (let n of piles)
        max = Math.max(n, max)
    return max
}