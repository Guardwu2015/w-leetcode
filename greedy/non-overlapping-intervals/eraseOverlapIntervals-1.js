// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
 * 思路：动态规划
 * 时间复杂度: O(n^2)
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
            if (sa !== sb) {
                return sa - sb
            }

            return ea - eb
        })
        // memo[i]表示以intervals[i]为结尾的区间能构成的最长不重叠区间序列
        const memo = new Array(intervals.length).fill(1)
        for(let i = 1; i < newIntervals.length; i ++)
            // memo[i]
            for(let j = 0; j < i; j++)
                if(intervals[i][0] >= intervals[j][1])
                    memo[i] = Math.max(memo[i], 1 + memo[j])

        let res = 0
        for(let i = 0; i < memo.length; i ++)
            res = Math.max(res, memo[i])

        return intervals.length - res
}

export default eraseOverlapIntervals