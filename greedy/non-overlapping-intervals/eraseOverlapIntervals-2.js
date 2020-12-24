// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
 * 思路：贪心算法
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
        if(intervals.length == 0) {
            return 0
        }

        const newIntervals = intervals.sort((a, b) => {
            const [sa, ea] = a
            const [sb, eb] = b
            if (ea !== eb) {
                return ea - eb
            }

            return sa - sb
        })

        let res = 1
        let pre = 0
        for(let i = 1 ; i < newIntervals.length ; i ++)
            if(newIntervals[i][0] >= newIntervals[pre][1]){
                res ++
                pre = i
            }

        return intervals.length - res
};