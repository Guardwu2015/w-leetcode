// https://leetcode-cn.com/problems/corporate-flight-bookings
/**
 * 思路：差分数组
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

// 差分数组
const diff = []

const corpFlightBookings = function(bookings, n) {
    const nums = []
    for (let i = 0; i < n; i++) {
        nums[i] = 0
    }
    // 构造差分数组
    diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        diff[i] = nums[i] - nums[i - 1]
    }

    for (const book of bookings) {
        const i = book[0] - 1
        const j = book[1] - 1
        const val = book[2]
        increment(i, j, val)
    }

    return getResult()
};

function increment(i, j, val) {
    diff[i] += val
    if (j + 1 < diff.length) {
        diff[j + 1] -= val
    }
}

function getResult() {
    const res = []
    res[0] = diff[0]
    for (let i = 1; i < diff.length; i++) {
        res[i] = res[i - 1] + diff[i]
    }
    return res
}

export default corpFlightBookings