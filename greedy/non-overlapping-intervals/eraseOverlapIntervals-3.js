// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
 * 思路：贪心算法
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[][]} intervals
 * @return {number}
 */

const eraseOverlapIntervals = function (intervals) {
    const n = intervals.length

    return n - intervalSchedule(intervals)
}

function intervalSchedule(intvs) {
    if (intvs.length == 0) {
        return 0
    }
    // 按 end 升序排序
    intvs.sort((a, b) => {
        return a[1] - b[1]
    })
    // 至少有一个区间不相交
    let count = 1
    // 排序后，第一个区间就是 x
    let x_end = intvs[0][1]
    for (let interval of intvs) {
        let start = interval[0]
        if (start >= x_end) {
            // 找到下一个选择的区间了
            count++;
            x_end = interval[1]
        }
    }
    return count
}