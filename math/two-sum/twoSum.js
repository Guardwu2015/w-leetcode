// https: //leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    numsIndexes = {}

    for (let i = 0; i < nums.length; i += 1) {
        let curDiff = target - nums[i]

        if (numsIndexes[curDiff] !== undefined &&
            numsIndexes[curDiff] !== i) {
            return [i, numsIndexes[curDiff]]
        } else {
            numsIndexes[nums[i]] = i
        }
    }
};