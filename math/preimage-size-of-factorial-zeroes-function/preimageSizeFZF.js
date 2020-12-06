// https://leetcode-cn.com/problems/preimage-size-of-factorial-zeroes-function/

/**
 * @param {number} K
 * @return {number}
 */
/* 主函数 */
const preimageSizeFZF = function(K) {
    // 左边界和右边界之差 + 1 就是答案
    return right_bound(K) - left_bound(K) + 1
}

/* 搜索 trailingZeroes(n) == K 的左侧边界 */
function left_bound(target) {
    let lo = 0, hi = Number.MAX_SAFE_INTEGER
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2)
        if (trailingZeroes(mid) < target) {
            lo = mid + 1
        } else if (trailingZeroes(mid) > target) {
            hi = mid
        } else {
            hi = mid
        }
    }

    return lo
}

/* 搜索 trailingZeroes(n) == K 的右侧边界 */
function right_bound(target) {
    let lo = 0, hi = Number.MAX_SAFE_INTEGER
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo) / 2)
        if (trailingZeroes(mid) < target) {
            lo = mid + 1
        } else if (trailingZeroes(mid) > target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    }

    return lo - 1
}

function trailingZeroes(n) {
    let res = 0
    let divisor = 5
    while (divisor <= n) {
        res += Math.floor(n / divisor)
        divisor *= 5
    }
    return res
};