// https://leetcode-cn.com/problems/subsets/submissions/

/**
 * 解法1
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets1 = function(nums) {
    const result = [[]]
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i]
    //     for (let j = 0, n = result.length; j < n; j++) {
    //         const newSub = result[j].concat(num)
    //         result.push(newSub)
    //     }
    // }
    for(let i = 0; i < nums.length; i++){
        result.forEach(e =>{
            result.push(e.concat(nums[i]))
        })
    }
    return result
}

/**
 * 解法二，dfs，回溯
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets2 = function (nums) {
    const res = []
    backtrack(nums, 0, [], res)
    return res
}

function backtrack(nums, start, track, res) {
    res.push(track.slice())

    for (let i = start; i < nums.length; i++) {
        track.push(nums[i])
        backtrack(nums, i + 1, track, res)
        track.pop()
    }
}