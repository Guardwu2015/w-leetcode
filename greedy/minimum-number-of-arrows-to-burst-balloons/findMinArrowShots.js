// https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons

/**
 * 思路：贪心算法
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    if (points.length == 0) {
        return 0
    }
    // 按 end 升序排序
    points.sort((a, b) => {
        return a[1] - b[1]
    })
    // 至少有一个区间不相交
    let count = 1
    // 排序后，第一个区间就是 x
    let x_end = points[0][1]
    for (let point of points) {
        let start = point[0]
        if (start > x_end) {
            // 找到下一个选择的区间了
            count++;
            x_end = point[1]
        }
    }
    return count
}