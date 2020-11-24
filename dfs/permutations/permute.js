// https: //leetcode-cn.com/problems/permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const res = []
    backtrack(nums, [], res)
    return res
}

function backtrack(nums, track, res) {
    if (track.length === nums.length) {
        res.push(track.slice())
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (track.includes(nums[i])) {
            continue
        }

        track.push(nums[i])
        backtrack(nums, track, res)
        track.pop()
    }
}