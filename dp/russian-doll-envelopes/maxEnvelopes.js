// https: //leetcode-cn.com/problems/russian-doll-envelopes

/**
 * 思路：排序，转换成LIS问题
 * 排序规则：宽度升序，高度降序
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    const n = envelopes.length
    // 按宽度升序排列，如果宽度一样，则按高度降序排列
    envelopes.sort((a, b) => {
        const [sa, ea] = a
        const [sb, eb] = b
        if (sa !== sb) {
            return sa - sb
        }

        return eb - ea
    })
    // 对高度数组寻找 LIS
    const height = []
    for (let i = 0; i < n; i++)
        height[i] = envelopes[i][1]

    return lengthOfLIS(height)
}



const lengthOfLIS = function (nums) {
    if (nums.length == 0) {
        return 0
    }

    // memo[i] 表示以 nums[i] 为结尾的最长上升子序列的长度
    const memo = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                memo[i] = Math.max(memo[i], 1 + memo[j])
            }
        }
    }

    let res = memo[0]
    for (let i = 1; i < nums.length; i++) {
        res = Math.max(res, memo[i])
    }

    return res
}