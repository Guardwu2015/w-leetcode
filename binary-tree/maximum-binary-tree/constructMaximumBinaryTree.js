// https://leetcode-cn.com/problems/maximum-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function (nums) {
    return build(nums, 0, nums.length - 1)
}

function build(nums, l, h) {
    if (l > h) {
        return null
    }
    let index = -1,
        maxVal = Number.MIN_SAFE_INTEGER
    for (let i = l; i <= h; i++) {
        if (maxVal < nums[i]) {
            maxVal = nums[i]
            index = i
        }
    }

    let root = new TreeNode(maxVal)
    root.left = build(nums, l, index - 1)
    root.right = build(nums, index + 1, h)

    return root
}