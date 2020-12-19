// 198. House Robber
// https://leetcode.com/problems/house-robber/description/
// 动态规划
// 时间复杂度: O(n^2)
// 空间复杂度: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
    const n = nums.length
    if(n == 0)
        return 0

    // memo[i] 表示考虑抢劫 nums[0...i] 所能获得的最大收益
    const memo = new Array(n).fill(-1)
    memo[0] = nums[0]
    for(let  i = 1 ; i < n ; i ++)
        for (let j = i; j >= 0; j--)
            memo[i] = Math.max(memo[i],
                                nums[j] + (j - 2 >= 0 ? memo[j - 2] : 0))

    return memo[n-1]
}